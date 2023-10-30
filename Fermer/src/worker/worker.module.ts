import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Worker, WorkerScheme} from "./schemas/worker.schema"
import { Special, SpecialScheme } from '../special/schemas/special.scheme';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Worker.name,schema: WorkerScheme},
    {name: Special.name,schema: SpecialScheme} 
  ])],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
