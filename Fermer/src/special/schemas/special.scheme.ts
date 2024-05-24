import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Worker } from "../../worker/schemas/worker.schema";

export type SpecialDocument = HydratedDocument<Special>

@Schema()
export class Special {
    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref: "Worker"}] })
    workers: Worker[];
}

export const SpecialScheme = SchemaFactory.createForClass(Special)