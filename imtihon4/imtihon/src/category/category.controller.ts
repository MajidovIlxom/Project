import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import { AdminRoleGuard } from '../guards/admin.role.guard';


@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({summary: "Category created"})
  @UseGuards(AdminRoleGuard)
  @Post('create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({summary: "Categorylarni Hammmasini ko'rish"})
  @Get('find')
  findAll() {
    return this.categoryService.findAll();
  }

  @ApiOperation({summary: "Categorylarni bittasini ko'rish"})
  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @ApiOperation({summary: "Categoryni o'zgartirish"})
  @UseGuards(AdminRoleGuard)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @ApiOperation({summary: "Categoryni o'chirish"})
  @UseGuards(AdminRoleGuard)
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
