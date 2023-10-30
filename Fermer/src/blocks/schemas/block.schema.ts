import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type BlockDocument = HydratedDocument<Block>

@Schema({versionKey: false})
export class Block {
    @Prop()
    number: number;
    @Prop()
    description: string;

    @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref: "Worker"}] })
    workers: Worker[];


}

export const BlockSchema = SchemaFactory.createForClass(Block)