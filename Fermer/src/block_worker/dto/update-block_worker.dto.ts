import { PartialType } from '@nestjs/swagger';
import { CreateBlockWorkerDto } from './create-block_worker.dto';

export class UpdateBlockWorkerDto extends PartialType(CreateBlockWorkerDto) {}
