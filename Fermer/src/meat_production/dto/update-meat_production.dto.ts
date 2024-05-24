import { PartialType } from '@nestjs/swagger';
import { CreateMeatProductionDto } from './create-meat_production.dto';

export class UpdateMeatProductionDto extends PartialType(CreateMeatProductionDto) {}
