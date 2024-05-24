import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FeedingDocument = HydratedDocument<Feeding>

@Schema()
export class Feeding {
    @Prop()
    animal_id: number;

    @Prop()
    feeding_schedules: number;
    
    @Prop()
    types_of_feed: number;
    
    @Prop()
    dietary: number;
    
    @Prop()
    morker_id: number;
}
export const FeedingSchema = SchemaFactory.createForClass(Feeding);
