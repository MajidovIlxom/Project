import { PartialType } from '@nestjs/swagger';
import { CreateRecordOfIlnessDto } from './create-record_of_ilness.dto';

export class UpdateRecordOfIlnessDto extends PartialType(CreateRecordOfIlnessDto) {}
