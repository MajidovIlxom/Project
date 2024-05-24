import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Info, InfoScheme } from './schemas/info.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Info.name, schema: InfoScheme }])],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
