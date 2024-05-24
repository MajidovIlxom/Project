import { Injectable } from '@nestjs/common';
import { CreateBlockWorkerDto } from './dto/create-block_worker.dto';
import { UpdateBlockWorkerDto } from './dto/update-block_worker.dto';
import { BlockWorker } from './schemas/block_worker.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlockWorkerService {
  constructor(
    @InjectModel(BlockWorker.name) private readonly blockWorkerModel: Model<BlockWorker>,
  ) {}
  create(createBlockWorkerDto: CreateBlockWorkerDto) {
    return this.blockWorkerModel.create(createBlockWorkerDto);
  }

  findAll() {
    return this.blockWorkerModel.find()
  }

  findOne(id: string) {
    return this.blockWorkerModel.findById(id)
  }

  update(id: string, updateBlockWorkerDto: UpdateBlockWorkerDto) {
    return this.blockWorkerModel.findByIdAndUpdate(id, updateBlockWorkerDto)
  }

  remove(id: string) {
    return this.blockWorkerModel.findByIdAndDelete(id);
  }
}
