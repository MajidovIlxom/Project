import { Injectable } from '@nestjs/common';
import { CreateSpecialDto } from './dto/create-special.dto';
import { UpdateSpecialDto } from './dto/update-special.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Special, SpecialDocument } from './schemas/special.scheme';
import { Model } from 'mongoose';

@Injectable()
export class SpecialService {
  constructor(@InjectModel(Special.name) private readonly specialModel: Model<SpecialDocument>) {
    
  }

  create(createSpecialDto: CreateSpecialDto) {
    return this.specialModel.create(createSpecialDto)
  }

  findAll() {
    return this.specialModel.find().populate("workers");
  }

  findOne(id: number) {
    return `This action returns a #${id} special`;
  }

  update(id: number, updateSpecialDto: UpdateSpecialDto) {
    return `This action updates a #${id} special`;
  }

  remove(id: number) {
    return `This action removes a #${id} special`;
  }
}
