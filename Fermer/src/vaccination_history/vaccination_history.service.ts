import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VaccinationHistory, VaccinationHistoryDocument } from './schemas/vaccination_history.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccinationHistoryService {
  constructor (@InjectModel(VaccinationHistory.name) private readonly vaccinationModel: Model<VaccinationHistoryDocument> ){}


  async create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    const vaccition = await this.vaccinationModel.create(createVaccinationHistoryDto)
    return vaccition;
  }

  findAll() {
    return this.vaccinationModel.find();
  }

  findOne(id: number) {
    return this.vaccinationModel.findById(+id);
  }

  update(id: number, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
     
    return this.vaccinationModel.findByIdAndUpdate({id}, updateVaccinationHistoryDto);
  }

  remove(id: number) {

    return this.vaccinationModel.deleteOne({id})
  }
}
