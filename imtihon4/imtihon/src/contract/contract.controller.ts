import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import { ClientGuard } from '../guards/client.guard';
import { AdminRoleGuard } from '../guards/admin.role.guard';

@ApiTags("Contract")
@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @ApiOperation({summary: "Shartnoma yaratish"})
  @UseGuards(AdminRoleGuard)
  @Post('create')
  create(@Body() createContractDto: CreateContractDto) {
    return this.contractService.create(createContractDto);
  }

  @ApiOperation({summary: "Shartnomani hammasini ko'rish"})
  @UseGuards(AdminRoleGuard)
  @Get('find')
  findAll() {
    return this.contractService.findAll();
  }

  @ApiOperation({summary: "Shartnomani bittasini ko'rish"})
  @UseGuards(ClientGuard || AdminRoleGuard)
  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.contractService.findOne(+id);
  }

  @ApiOperation({summary: "Shartnomaga o'zgartirish kiritish"})
  @UseGuards(AdminRoleGuard)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateContractDto: UpdateContractDto) {
    return this.contractService.update(+id, updateContractDto);
  }

  @ApiOperation({summary: "Shartnomani bekor qilish"})
  @UseGuards(AdminRoleGuard)
  @Put(':id')
  remove(@Param('id') id: string) {
    return this.contractService.updateContract(+id);
  }
}
