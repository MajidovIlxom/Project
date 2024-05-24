import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Info, infoDocument } from './schemas/info.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(Info.name) private readonly infoModel: Model<infoDocument>){}

  create(createInfoDto: CreateInfoDto) {
    return this.infoModel.create(createInfoDto)
  }

  findAll() {
    return this.infoModel.find();
  }

  findOne(id: number) {
    return this.infoModel.findOne({id});
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    return this.infoModel.findByIdAndUpdate({id}, updateInfoDto)
  }

  remove(id: number) {
    return this.infoModel.deleteOne({id});
  }
}
