import { PartialType } from '@nestjs/swagger';
import { CreateMilkProductionDto } from './create-milk_production.dto';

export class UpdateMilkProductionDto extends PartialType(CreateMilkProductionDto) {}
