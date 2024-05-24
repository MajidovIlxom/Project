import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Animal } from "../../animals/schemas/animal.schema";

export type AnimalTypeDocument = HydratedDocument<AnimalType>

@Schema({versionKey: false})
export class AnimalType {

    @Prop({required: true})
    type_name: string;
    
    @Prop()
    description: string;
    
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Animal" }] })
    animals: mongoose.Types.ObjectId[];
}

export const AnimalTypeScheme = SchemaFactory.createForClass(AnimalType)
