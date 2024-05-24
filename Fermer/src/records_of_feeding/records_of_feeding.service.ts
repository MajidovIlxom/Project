import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOfFeedingDocument, RecordsOfFeeding } from './schemas/records_of_feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(@InjectModel(RecordsOfFeeding.name) private readonly RecordModel: Model<RecordOfFeedingDocument>){}


  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {

    return this.RecordModel.create(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.RecordModel.find();
  }

  findOne(id: number) {
    return this.RecordModel.findById(id);
  }

  update(id: number, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return this.RecordModel.findByIdAndUpdate({id}, updateRecordsOfFeedingDto); //
  }

  remove(id: number) {
    return this.RecordModel.deleteOne({id})
  }
}
