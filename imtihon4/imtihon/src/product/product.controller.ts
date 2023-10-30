import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import { ClientGuard } from '../guards/client.guard';


@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({summary: 'Product Create'})
  @UseGuards(AdminGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('photo'))
  create(@Body() createProductDto: CreateProductDto,  @UploadedFile() photo: any) {
    return this.productService.create(createProductDto, photo);
  }

  @ApiOperation({summary: "Product Hammasini ko'rish"})
  @Get('find')
  findAll() {
    return this.productService.findAll();
  }

  @ApiOperation({summary: "Product bittasini ko'rish"})
  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiOperation({summary: "Productni o'zgartirish"})
  @UseGuards(AdminGuard)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @ApiOperation({summary: "Product remove"})
  @UseGuards(AdminGuard)
  @Put(':id')
  remove(@Param('id') id: string) {
    return this.productService.updateContract(+id);
  }
}
