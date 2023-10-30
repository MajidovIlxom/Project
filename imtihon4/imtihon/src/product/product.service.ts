import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './Models/product.models';
import { FilesService } from '../files/files.service';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private readonly productRepo: typeof Product,
  private readonly fileService: FilesService
  ){}


  async create(createProductDto: CreateProductDto, photo: any){
    const fileName = await this.fileService.createFile(photo)
    const product = await this.productRepo.create({
      ...createProductDto,
      photo: fileName
    })
    return product;
  }

  async findAll() {
    const product = await this.productRepo.findAll({include: {all: true}})
    return product;
  } 

  async findOne(id: number) {
    const product = await this.productRepo.findOne({where: {id: id}})
    return product
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.update(updateProductDto, {where: {id: id}, returning: true})
    return product[1][0];
  }

  async updateContract(id) {
    const updatedContract = await this.productRepo.update(
      { is_active: false },
      { where: { id: id, is_active: true }, returning: true }
    );
  
    if (!updatedContract[1][0]) {
      throw new BadRequestException("the contract is inactive");
    }
  
    const response = {
      message: "The contract was successfully deleted",
      Contract: updatedContract[1][0] 
    };
    return response;
  }
}
