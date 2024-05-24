import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({summary: "Post Admin"})
  @Post('create')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({summary: "Get all Admin"})
  @Get('find')
  findAll() {
    return this.adminService.findAll();
  }
  
  @ApiOperation({summary: "Get One Admin"})
  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }
  @ApiOperation({summary: "Update Admin"})
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({summary: "Delete Admin"})
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
