import { Module } from '@nestjs/common';
import { SpecialService } from './special.service';
import { SpecialController } from './special.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Special, SpecialScheme } from './schemas/special.scheme';

@Module({
  imports: [MongooseModule.forFeature([{name: Special.name,schema: SpecialScheme}])],
  controllers: [SpecialController],
  providers: [SpecialService],
})
export class SpecialModule {}
