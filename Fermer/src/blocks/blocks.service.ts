import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Block, BlockDocument } from './schemas/block.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block.name) private readonly blockModel: Model<BlockDocument>) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.find();
  }

  findOne(id: string) {
    return this.blockModel.findById(id);
  }

  update(id: string, updateBlockDto: UpdateBlockDto) {
    return this.blockModel.findByIdAndUpdate(id, updateBlockDto)
  }

  remove(id: string) {
    return this.blockModel.findByIdAndDelete(id)
  }
}
