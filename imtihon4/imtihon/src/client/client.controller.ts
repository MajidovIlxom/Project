import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Response } from 'express';
import { UpdateClientDto } from './dto/update-client.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Client } from './Models/client.models';
import { LogenClientDto } from './dto/login.dto';
import { CookieGetter } from '../decorator/cookieGetter.decorator';
import { ClientGuard } from '../guards/client.guard';
import { FindClientDto } from './dto/findcCient.dto';


@ApiTags("Client")
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  
  @ApiOperation({summary: "register user"})
  @ApiResponse({status: 201, type: Client})
  @Post("signup")
  @UseInterceptors(FileInterceptor('imege'))
  registeration(
    @Body() createPostssDto: CreateClientDto,
    @UploadedFile() imege: any,
    @Res({passthrough: true}) res: Response,
    ) {
    return this.clientService.registeration(createPostssDto, imege, res);
  }

  @ApiOperation({summary: "activate Admin"})
  @ApiResponse({status: 200, type: [Client]})
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.clientService.activate(link);
  }

  @ApiOperation({summary: "login admin"})
  @ApiResponse({status: 200, type: Client})
  @HttpCode(HttpStatus.OK)
  @Post("login")
  login(
    @Body() loginAdminDto: LogenClientDto,
    @Res({passthrough: true}) res: Response,
  ) {
    return this.clientService.login(loginAdminDto, res);
  }



  @ApiOperation({summary: "logout Admin"})
  @ApiResponse({status: 200, type: Client})
  @HttpCode(HttpStatus.OK)
  @UseGuards(ClientGuard)
  @Post('logout')
  logout(
    @CookieGetter('refresh_token') refresh_token : string,
    @Res({passthrough: true}) res: Response
  ){
    return this.clientService.logout(refresh_token, res);
  }


  @ApiOperation({summary: "RefreshToken user"})
  @ApiResponse({status: 200, type: Client})
  @HttpCode(HttpStatus.OK)
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refresh_token : string,
    @Res({passthrough: true}) res: Response,
  ){
    return this.clientService.refreshToken(+id, refresh_token, res);
  }


  @ApiOperation({summary: "find admin filter"})
  @ApiResponse({status: 200, type: Client})
  @HttpCode(HttpStatus.OK)
  @Post('find')
  findAll(@Body() findClientDto: FindClientDto){
    return this.clientService.findAll(findClientDto)
  }
}
