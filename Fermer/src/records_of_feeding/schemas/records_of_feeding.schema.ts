import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RecordOfFeedingDocument =  HydratedDocument<RecordsOfFeeding>

@Schema()
export class RecordsOfFeeding {
    @Prop()
    date:Date;

    @Prop()
    consumption: number

    @Prop()
    feeding_id: number
}
export const RecordOfIlnessScheme = SchemaFactory.createForClass(RecordsOfFeeding)

