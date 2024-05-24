import { Injectable } from '@nestjs/common';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feeding, FeedingDocument } from './schemas/feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class FeedingService {
  constructor(@InjectModel(Feeding.name) private readonly feedingModel: Model<FeedingDocument>){}


  create(createFeedingDto: CreateFeedingDto) {
    return this.feedingModel.create(createFeedingDto);
  }

  findAll() {
    return this.feedingModel.find();
  }

  findOne(id: number) {
    return this.feedingModel.findById(id);
  }

  update(id: number, updateFeedingDto: UpdateFeedingDto) {
    return this.feedingModel.findByIdAndUpdate({id}, updateFeedingDto);
  }

  remove(id: number) {
    return this.feedingModel.deleteOne({id});
  }
}
