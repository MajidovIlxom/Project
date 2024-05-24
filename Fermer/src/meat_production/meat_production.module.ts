import { Module } from '@nestjs/common';
import { MeatProductionService } from './meat_production.service';
import { MeatProductionController } from './meat_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MeatProductScheme, MeatProduction } from './schemas/meat_production.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: MeatProduction.name, schema: MeatProductScheme}])],
  controllers: [MeatProductionController],
  providers: [MeatProductionService],
})
export class MeatProductionModule {}
