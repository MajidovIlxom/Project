import { PartialType } from '@nestjs/swagger';
import { CreateRecordsOfFeedingDto } from './create-records_of_feeding.dto';

export class UpdateRecordsOfFeedingDto extends PartialType(CreateRecordsOfFeedingDto) {}
