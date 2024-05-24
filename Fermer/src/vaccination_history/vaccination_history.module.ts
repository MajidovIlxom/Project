import { Module } from '@nestjs/common';
import { VaccinationHistoryService } from './vaccination_history.service';
import { VaccinationHistoryController } from './vaccination_history.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { VaccinationHistory, VaccinationHistoryScheme } from './schemas/vaccination_history.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: VaccinationHistory.name,schema: VaccinationHistoryScheme}])

  ],
  controllers: [VaccinationHistoryController],
  providers: [VaccinationHistoryService],
  exports: [VaccinationHistoryService]
})
export class VaccinationHistoryModule {}
