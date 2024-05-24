import { PartialType } from '@nestjs/swagger';
import { CreateAnimalTypeDto } from './create-animal_type.dto';

export class UpdateAnimalTypeDto extends PartialType(CreateAnimalTypeDto) {}
