import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './Models/client.models';
import { FilesService } from '../files/files.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { v4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LogenClientDto } from './dto/login.dto';
import { Op } from 'sequelize';
import { FindClientDto } from './dto/findcCient.dto';
import { Contract } from '../contract/Models/contract.models';


@Injectable()
export class ClientService {
  constructor(@InjectModel(Client) private clientRepo: typeof Client,
  private readonly fileService: FilesService,
  private readonly  jwtService: JwtService,
  private readonly mailService: MailService,
  ) {}


  async getToken(user: Client){
    const jwtPayload = {
      id: user.id,
      is_active: user.is_active,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      }),
    ])
    return {
      access_token: accessToken,
    refresh_token: refreshToken
  }
  }

  async registeration(createClientDto: CreateClientDto, imege: any, res: Response){
    const user = await this.clientRepo.findOne({
      where:{username: createClientDto.username}
    })
    if (user) {
      throw new BadRequestException("User already exists")
    }
    if (createClientDto.hashed_password !== createClientDto.confirm_password){
      throw new BadRequestException("Passwor is not match")
    }
    const hashed_password = await bcrypt.hash(createClientDto.hashed_password, 7)
    const fileName = await this.fileService.createFile(imege)
    const newClient = await this.clientRepo.create({
      ...createClientDto,
      imege: fileName,
      hashed_password: hashed_password
    });
    const tokens = await this.getToken(newClient);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const  uniqueKey: string = v4();

    const updatedUser = await this.clientRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
        activation_link: uniqueKey
    },
    {where: {id: newClient.id},returning : true}
    )
    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15*24*60*60*1000,
      httpOnly: true
    })

    try {
      await this.mailService.sendClientConfirmation(updatedUser[1][0])
    } catch (error) {
      console.log('error: ', error);
    }    
    const respons = {
      message: "User registred",
      Client: updatedUser[1][0],
      tokens,
    }
    return respons
  }

  async activate( link: string){
    if (!link){
      throw new BadRequestException('Activation link not found');
    }
    const updatedClient = await this.clientRepo.update(
      {is_active: true},
      {where: {activation_link: link, is_active: false}, returning: true},
      )
    if (!updatedClient[1][0]){
      throw new BadRequestException('Client already activated');
    }
    const response = {
      message: "Client activated successfully",
      Client: updatedClient[1][0],
    }
    return response;
  }

  async login(loginAdminDto: LogenClientDto, res: Response){
    const { email, hashed_password } = loginAdminDto;
    const client = await this.clientRepo.findOne({where:{email}})
    if (!client) {
      throw new UnauthorizedException("Client not registered");
    }
    if (!client.is_active) {
      throw new BadRequestException("Client is not active");
    }

    const isMatchPass = await bcrypt.compare(hashed_password, client.hashed_password)
    if (!isMatchPass) {
      throw new UnauthorizedException("Client not registered(pass)");
    }
    const tokens = await this.getToken(client);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const updatedClient = await this.clientRepo.update(
      {hashed_refresh_token: hashed_refresh_token},
      {where: {id: client.id}, returning: true}
    );
    
    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15*24*60*60*1000,
      httpOnly: true
    })

    const respons = {
      message: "Client logged in successfully",
      admin: updatedClient[1][0],
      tokens,
    }
    return respons
  }

  async logout(refreshToken: string, res: Response) {
    try {
      const clientData = await this.jwtService.verify(refreshToken,{
        secret: process.env.REFRESH_TOKEN_KEY,
      })
      if (!clientData){
        throw new ForbiddenException("Client Not Found")
      }
      const updateClient = await this.clientRepo.update(
        {hashed_refresh_token: null},
        {where: {id: clientData.id} ,returning: true}
      );
      res.clearCookie('refresh_token')
      const respons= {
        message: "Client log out successfully",
        admin: updateClient[1][0],
      }
      return respons;
    } catch (error) {
      console.log(error);
    }
  }

  async refreshToken(client_id:number, refreshToken: string , res: Response){
    const decodedToken = await this.jwtService.decode(refreshToken)
    if (client_id != decodedToken['id']){
      throw new BadRequestException("Client not found")
    }
    const client = await this.clientRepo.findOne({where: {id: client_id}})
    if (!client || !client.hashed_refresh_token){
      throw new BadRequestException("Client not found")
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken, 
      client.hashed_refresh_token);
      if (!tokenMatch){
        throw new ForbiddenException("Forbidden")
      }
    const tokens = await this.getToken(client);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const updatedClient = await this.clientRepo.update(
      {hashed_refresh_token: hashed_refresh_token},
      {where: {id: client.id}, returning: true}
    );
    
    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15*24*60*60*1000,
      httpOnly: true
    })
    const respons = {
      message: "Admin refresh token",
      client: updatedClient[1][0],
      tokens,
    }
    return respons
  }

  async findAll(findClientDto: FindClientDto){
    const where= {}
    if (findClientDto.first_name){
      where['first_name'] = {
      [Op.like]: `%${findClientDto.first_name}%`,
      };
    };
    
    if (findClientDto.last_name){
      where['last_name'] = {[Op.like]: `%${findClientDto.last_name}%`}
    }

    if (findClientDto.email){
      where['email'] = {[Op.like]: `%${findClientDto.email}%`}
    }

    if (findClientDto.phone_number){
      where['phone_number'] = {[Op.like]: `%${findClientDto.phone_number}%`}
    }
    
    if (findClientDto.passport_series){
      where['passport_series'] = {[Op.like]: `%${findClientDto.passport_series}%`}
    }
    if (findClientDto.username){
      where['username'] = {[Op.like]: `%${findClientDto.username}%`}
    }

    console.log(where);
    const clients = await Client.findAll({where})
    if (!clients){
      throw new BadRequestException("Client not found")
    }
    return clients;
  };

  

}