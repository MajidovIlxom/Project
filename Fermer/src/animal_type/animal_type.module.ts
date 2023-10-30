import { Module } from '@nestjs/common';
import { AnimalTypeService } from './animal_type.service';
import { AnimalTypeController } from './animal_type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalType, AnimalTypeScheme } from './schemas/animal_type.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: AnimalType.name, schema: AnimalTypeScheme}])],
  controllers: [AnimalTypeController],
  providers: [AnimalTypeService],
})
export class AnimalTypeModule {}
