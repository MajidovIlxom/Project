import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Worker, WorkerDocument } from './schemas/worker.schema';
import { Model } from 'mongoose';
import { Special, SpecialDocument } from '../special/schemas/special.scheme';
import { log } from 'console';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name) private readonly workerModel: Model<WorkerDocument>, 
    @InjectModel(Special.name) private readonly specialModel: Model<SpecialDocument>, 
  ) {}
  async create(createWorkerDto: CreateWorkerDto) {
    const {special_id} = createWorkerDto;
    
    const spec = await this.specialModel.findById(special_id);
    log(spec)
    if(!spec){
      throw new BadRequestException("Specialist not found");
    }
    const worker =await  this.workerModel.create(createWorkerDto);
    spec.workers.push(worker);
    await spec.save();
    return worker;
  }

  findAll() {
    return this.workerModel.find().populate("special_id")
  }

  findOne(id: string) {
    return this.workerModel.findById(id)
  }

  update(id: string, updateWorkerDto: UpdateWorkerDto) {
    return this.workerModel.findByIdAndUpdate(id, updateWorkerDto)
  }

  remove(id: string) {
    return this.workerModel.findByIdAndDelete(id)
  }
}
