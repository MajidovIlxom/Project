import { Injectable } from '@nestjs/common';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordDocument, RecordOfIlness } from './schemas/record_of_ilness.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordOfIlnessService {
  constructor(@InjectModel(RecordOfIlness.name) private readonly RecordOdIlessModel: Model<RecordDocument>){}

  create(createRecordOfIlnessDto: CreateRecordOfIlnessDto) {
    return this.RecordOdIlessModel.create(createRecordOfIlnessDto);
  }

  findAll() {
    return this.RecordOdIlessModel.find()
  }

  findOne(id: number) {
    return this.RecordOdIlessModel.findOne({id});
  }

  update(id: number, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    return this.RecordOdIlessModel.findByIdAndUpdate({id}, updateRecordOfIlnessDto);
  }

  remove(id: number) {
    return this.RecordOdIlessModel.deleteOne({id});
  }
}
