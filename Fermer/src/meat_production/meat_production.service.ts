import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MeatProductDocument, MeatProduction } from './schemas/meat_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MeatProductionService {
  constructor(@InjectModel(MeatProduction.name) private readonly meatProductModel: Model<MeatProductDocument>){}

  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProductModel.create(createMeatProductionDto);
  }

  findAll() {
    return this.meatProductModel.find();
  }

  findOne(id: number) {
    return this.meatProductModel.findOne({id});
  }

  update(id: number, updateMeatProductionDto: UpdateMeatProductionDto) {
    return this.meatProductModel.findByIdAndUpdate({id}, updateMeatProductionDto)
    }

  remove(id: number) {
    return this.meatProductModel.deleteOne({id});
  }
}
