import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalType, AnimalTypeDocument } from './schemas/animal_type.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(@InjectModel(AnimalType.name) private readonly animalTypeModel: Model<AnimalTypeDocument>) {}
  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animalTypeModel.create(createAnimalTypeDto)
  }

  findAll() {
    return this.animalTypeModel.find().populate('animals')
  }

  findOne(id: string) {
    return this.animalTypeModel.findById(id).populate('animals')
  }

  update(id: string, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    return this.animalTypeModel.findByIdAndUpdate(id, updateAnimalTypeDto, {new: true})
  }

  async remove(id: string) {
    await this.animalTypeModel.findByIdAndDelete(id)
    return {message:"successfully deleted"}
  }
}
