import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { MeatProductionModule } from './meat_production/meat_production.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { RecordOfIlnessModule } from './record_of_ilness/record_of_ilness.module';
import { InfoModule } from './info/info.module';
import { RecordsOfFeedingModule } from './records_of_feeding/records_of_feeding.module';
import { FeedingModule } from './feeding/feeding.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';

@Module({
  imports: [
  ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
  MongooseModule.forRoot(process.env.MONGODB_URL),
  AdminModule,
  MeatProductionModule,
  FiberProductionModule,
  MilkProductionModule,
  RecordOfIlnessModule,
  InfoModule,
  RecordsOfFeedingModule,
  FeedingModule,
  VaccinationHistoryModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
