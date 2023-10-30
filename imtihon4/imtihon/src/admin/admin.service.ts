import { BadRequestException, ForbiddenException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './Models/admin.models';
import { MailService } from '../mail/mail.service';
import { JwtService } from '@nestjs/jwt';
import { LogenAdminDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { Response } from 'express';
import { FindAdminDto } from './dto/findAdmin.dto';
import { Op, Sequelize } from 'sequelize';
import { Payment } from '../payment/Models/payment.models';
import { AdminMessageDto } from './dto/message.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminRepo: typeof Admin,
  @Inject(MailService) private readonly mailService: MailService,
  @InjectModel(Payment) private readonly paymentRepo: typeof Payment,
    private readonly jwtService: JwtService,
    ){}

  
    async getToken(admin: Admin) {
      const jwtPayload = {
        id: admin.id,
        is_active: admin.is_active,
        role: admin.role
      };
  
      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.ACCESS_TOKEN_KEY,
          expiresIn: process.env.ACCESS_TOKEN_TIME,
        }),
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.REFRESH_TOKEN_KEY,
          expiresIn: process.env.REFRESH_TOKEN_TIME,
        }),
      ]);
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    }
  
    async registration(createAdminDto: CreateAdminDto, res: Response){
      const admin = await this.adminRepo.findOne({
        where: { username: createAdminDto.username },
      });
      if (admin) {
        throw new BadRequestException("Admin already exists");
      }
      if (createAdminDto.hashed_password !== createAdminDto.confirm_password) {
        throw new BadRequestException("Password is not provided");
      }
      const hashed_password = await bcrypt.hash(createAdminDto.hashed_password, 7);
      const newadmin = await this.adminRepo.create({
        ...createAdminDto,
        hashed_password: hashed_password,
      });
      const tokens = await this.getToken(newadmin);
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
      const uniqueKey: string = v4();  
      const updatedAdmin = await this.adminRepo.update(
        {
          hashed_refresh_token: hashed_refresh_token,
          activation_link: uniqueKey,
        },
        { where: { id: newadmin.id }, returning: true }
      );
      res.cookie("refresh_token", tokens.refresh_token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      
      try {
        this.mailService.sendAdminConfirmation(updatedAdmin[1][0]);
      } catch (error) {
        console.log('error: ', error);
      }
  
      const response = {
        message: "Admin registered",
        Admin: updatedAdmin[1][0],
        tokens,
      };
      return response;
    }  
    async activate( link: string){
      if (!link){
        throw new BadRequestException('Activation link not found');
      }
      const updatedAdmin = await this.adminRepo.update(
        {is_active: true},
        {where: {activation_link: link, is_active: false}, returning: true},
        )
      if (!updatedAdmin[1][0]){
        throw new BadRequestException('Admin already activated');
      }
      const response = {
        message: "Admin activated successfully",
        Admin: updatedAdmin[1][0],
      }
      return response;
    }
    async login(loginAdminDto: LogenAdminDto, res: Response){
      const { email, hashed_password } = loginAdminDto;
      const admin = await this.adminRepo.findOne({where:{email}})
      if (!admin) {
        throw new UnauthorizedException("Admin not registered");
      }
      if (!admin.is_active) {
        throw new BadRequestException("Admin is not active");
      }
  
      const isMatchPass = await bcrypt.compare(hashed_password, admin.hashed_password)
      if (!isMatchPass) {
        throw new UnauthorizedException("Admin not registered(pass)");
      }
      const tokens = await this.getToken(admin);
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
      const updatedAdmin = await this.adminRepo.update(
        {hashed_refresh_token: hashed_refresh_token},
        {where: {id: admin.id}, returning: true}
      );
      
      res.cookie("refresh_token", tokens.refresh_token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true
      })
  
      const respons = {
        message: "Admin logged in successfully",
        admin: updatedAdmin[1][0],
        tokens,
      }
      return respons
    }
  
    async logout(refreshToken: string, res: Response) {
      
        try {
          const adminData = await this.jwtService.verify(refreshToken,{
            secret: process.env.REFRESH_TOKEN_KEY,
          })
          if (!adminData){
            throw new ForbiddenException("Admin Not Found")
          }
          const updateAdmin = await this.adminRepo.update(
            {hashed_refresh_token: null},
            {where: {id: adminData.id} ,returning: true}
          );
          res.clearCookie('refresh_token')
          const respons= {
            message: "Admin log out successfully",
            admin: updateAdmin[1][0],
          }
          return respons;
        } catch (error) {
          console.log(error);
        }
    }
    async refreshToken(admin_id:number, refreshToken: string , res: Response){
      const decodedToken = await this.jwtService.decode(refreshToken)
      if (admin_id != decodedToken['id']){
        throw new BadRequestException("Admin not found")
      }
      const admin = await this.adminRepo.findOne({where: {id: admin_id}})
      if (!admin || !admin.hashed_refresh_token){
        throw new BadRequestException("Admin not found")
      }
      const tokenMatch = await bcrypt.compare(
        refreshToken, 
        admin.hashed_refresh_token);
        if (!tokenMatch){
          throw new ForbiddenException("Forbidden")
        }
      const tokens = await this.getToken(admin);
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
      const updatedAdmin = await this.adminRepo.update(
        {hashed_refresh_token: hashed_refresh_token},
        {where: {id: admin.id}, returning: true}
      );
      
      res.cookie("refresh_token", tokens.refresh_token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true
      })
      const respons = {
        message: "Admin refresh token",
        admin: updatedAdmin[1][0],
        tokens,
      }
      return respons
    }
  
    async findAll(findAdminDto: FindAdminDto){
      const where= {}
      if (findAdminDto.username){
        where['username'] = {
        [Op.like]: `%${findAdminDto.username}%`,
        };
      };
      
      if (findAdminDto.email){
        where['email'] = {[Op.like]: `%${findAdminDto.email}%`}
      }
  
      if (findAdminDto.telegram_link){
        where['telegram_link'] = {[Op.like]: `%${findAdminDto.telegram_link}%`}
      }

      if (findAdminDto.role) {
        where['role'] = Sequelize.literal(`role::VARCHAR LIKE '%${findAdminDto.role}%'`);
      }
  
      console.log(where);
      const admins = await Admin.findAll({where})
      if (!admins){
        throw new BadRequestException("")
      }
      return admins;
    } 


    async message(adminMessageDto: AdminMessageDto){
      const {month_data } = adminMessageDto
      const payment = await this.paymentRepo.findOne({where: {}})
      console.log('payment: ', payment);

      const today = new Date();
      const threeDaysAgo = new Date(today);
      threeDaysAgo.setDate(today.getDate() - 3);
    }

}
