import { Module } from '@nestjs/common';
import { FiberProductionService } from './fiber_production.service';
import { FiberProductionController } from './fiber_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FiberProduction, FiberSchema } from './schemas/fiber_production.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{name: FiberProduction.name, schema: FiberSchema,}])
],
  controllers: [FiberProductionController],
  providers: [FiberProductionService],
})
export class FiberProductionModule {}
