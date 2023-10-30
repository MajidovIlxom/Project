import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type infoDocument = HydratedDocument<Info>

@Schema()
export class Info {
    @Prop()
    weight: number;
    @Prop()
    color: string;
    @Prop()
    height: number;
    @Prop()
    breed: string;
    @Prop()
    gender: string;
    @Prop()
    bith_or_acquisition: Date;
    @Prop()
    block_id: number;
    @Prop()
    animal_id: number;
    @Prop()
    parent_id: number;
}

export const InfoScheme = SchemaFactory.createForClass(Info)
