import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './Models/category.models';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private readonly categoryRepo: typeof Category){}


  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepo.create(createCategoryDto)
    return category;
  }

  findAll() {
    const category = this.categoryRepo.findAll({include: {all: true}})
    return category;
  }

  findOne(id: number) {
    const category = this.categoryRepo.findOne({where: {id: id}}) 
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.update(updateCategoryDto, {where: {id: id}, returning: true}); 
    return category[1][0];
  }

  remove(id: number) {
    const category = this.categoryRepo.destroy({where: {id: id}})
    return category;
  }
}
