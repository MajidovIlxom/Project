import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine, VaccineDocument } from './schemas/vaccine.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
  constructor(@InjectModel(Vaccine.name) private readonly vaccineModel: Model<VaccineDocument>) {}
  create(createVaccineDto: CreateVaccineDto) {
    return this.vaccineModel.create(createVaccineDto)
  }

  findAll() {
    return this.vaccineModel.find()
  }

  findOne(id: string) {
    return this.vaccineModel.findById(id)
  }

  update(id: string, updateVaccineDto: UpdateVaccineDto) {
    return this.vaccineModel.findByIdAndUpdate(id, updateVaccineDto, {new: true})
  }

  async remove(id: string) {
    await this.vaccineModel.findByIdAndDelete(id)
    return {message:"successfully deleted"}
  }
}
