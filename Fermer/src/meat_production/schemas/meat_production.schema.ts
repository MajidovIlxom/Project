import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MeatProductDocument = HydratedDocument<MeatProduction>

@Schema()
export class MeatProduction {
    @Prop()
    meat_yield: number;

    @Prop()
    slaughter_date: number;

    @Prop()
    shearing_schedule: number;

    @Prop()
    animal_id: number;
}

export const MeatProductScheme = SchemaFactory.createForClass(MeatProduction)
