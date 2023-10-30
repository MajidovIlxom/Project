import { PartialType } from '@nestjs/swagger';
import { CreateFiberProductionDto } from './create-fiber_production.dto';

export class UpdateFiberProductionDto extends PartialType(CreateFiberProductionDto) {}
