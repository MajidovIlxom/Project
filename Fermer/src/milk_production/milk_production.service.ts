import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MilkProduction, MilkProductionDocument } from './schemas/milk_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MilkProductionService {
  constructor(@InjectModel(MilkProduction.name) private readonly milkProducModel: Model<MilkProductionDocument>){}

  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.milkProducModel.create(createMilkProductionDto);
  }

  findAll() {
    return this.milkProducModel.find();
  }

  findOne(id: number) {
    return this.milkProducModel.findById(id);
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.milkProducModel.findByIdAndUpdate({id}, updateMilkProductionDto);
  }

  remove(id: number) {
    return this.milkProducModel.deleteOne({id});
  }
}
