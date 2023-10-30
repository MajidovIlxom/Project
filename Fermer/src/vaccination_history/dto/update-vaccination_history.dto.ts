import { PartialType } from '@nestjs/swagger';
import { CreateVaccinationHistoryDto } from './create-vaccination_history.dto';

export class UpdateVaccinationHistoryDto extends PartialType(CreateVaccinationHistoryDto) {}
