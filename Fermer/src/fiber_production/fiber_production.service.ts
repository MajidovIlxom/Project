import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FiberProduction } from './schemas/fiber_production.schemas';
import { Model } from 'mongoose';

@Injectable()
export class FiberProductionService {
  constructor(@InjectModel(FiberProduction.name) private fiberProductionModel: Model<FiberProduction>){}


  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.fiberProductionModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.fiberProductionModel.find();
  }

  findOne(id: number) {
    return this.fiberProductionModel.findOne({id});
  }

  update(id: number, updateFiberProductionDto: UpdateFiberProductionDto) {
    return this.fiberProductionModel.findByIdAndUpdate(updateFiberProductionDto,{id});
  }

  remove(id: number) {
    return this.fiberProductionModel.deleteOne({id});
  }
}
