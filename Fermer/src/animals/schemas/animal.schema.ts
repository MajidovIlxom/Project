
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type AnimalDocument = HydratedDocument<Animal>

@Schema({versionKey: false})
export class Animal {


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "AnimalType" })
    animal_type_id: mongoose.Types.ObjectId;
    
    @Prop()
    photos: Array<string>;

    @Prop()
    unique_id: string;
}

export const AnimalScheme = SchemaFactory.createForClass(Animal)
