import { Module } from '@nestjs/common';
import { MilkProductionService } from './milk_production.service';
import { MilkProductionController } from './milk_production.controller';
import { MilkProduction, MilkSchema } from './schemas/milk_production.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: MilkProduction.name, schema: MilkSchema,}])
  ],
  controllers: [MilkProductionController],
  providers: [MilkProductionService],
})
export class MilkProductionModule {}
