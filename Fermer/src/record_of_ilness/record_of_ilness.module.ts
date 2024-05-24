import { Module } from '@nestjs/common';
import { RecordOfIlnessService } from './record_of_ilness.service';
import { RecordOfIlnessController } from './record_of_ilness.controller';
import { RecordOfIlness, RecordSchema } from './schemas/record_of_ilness.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: RecordOfIlness.name, schema: RecordSchema,}]),
  ],
  controllers: [RecordOfIlnessController],
  providers: [RecordOfIlnessService],
})
export class RecordOfIlnessModule {}
