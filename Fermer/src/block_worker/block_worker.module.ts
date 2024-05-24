import { Module } from '@nestjs/common';
import { BlockWorkerService } from './block_worker.service';
import { BlockWorkerController } from './block_worker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockWorker, BlockWorkerScheme } from './schemas/block_worker.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: BlockWorker.name, schema: BlockWorkerScheme}])],
  controllers: [BlockWorkerController],
  providers: [BlockWorkerService],
})
export class BlockWorkerModule {}
