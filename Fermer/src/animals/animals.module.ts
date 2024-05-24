import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalScheme } from './schemas/animal.schema';
import { AnimalType, AnimalTypeScheme } from '../animal_type/schemas/animal_type.schema';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Animal.name, schema: AnimalScheme},{name: AnimalType.name, schema: AnimalTypeScheme} ]), FilesModule],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
