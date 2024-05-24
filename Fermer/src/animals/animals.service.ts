import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, AnimalDocument } from  './schemas/animal.schema';
import { Model } from 'mongoose';
import { AnimalType, AnimalTypeDocument } from '../animal_type/schemas/animal_type.schema';
import {v4} from 'uuid';
import { FilesService } from '../files/files.service';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal.name) private readonly animalModel: Model<AnimalDocument>,
    @InjectModel(AnimalType.name) private readonly animalTypeModel: Model<AnimalTypeDocument>,
    private readonly fileService: FilesService,
    ) {}

  async create(createAnimalDto: CreateAnimalDto, photos: Array<object>) { 
    const type = await this.animalTypeModel.findById(createAnimalDto.animal_type_id);
    if(!type) {
      throw new BadRequestException("Animal type not found")
    }
    const photo = await this.fileService.createFiles(photos) 
    const unique_id = v4()
    return this.animalModel.create({...createAnimalDto, photos: photo, unique_id})
  }

  findAll() {
    return this.animalModel.find().populate('animal_type_id');
  }

  findOne(id: string) {
    return this.animalModel.findById(id);
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.findByIdAndUpdate(id, updateAnimalDto, {new: true});
  }

  remove(id: string) {
    return this.animalModel.findByIdAndDelete(id);
  }
}
