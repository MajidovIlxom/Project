import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Special } from "../../special/schemas/special.scheme";
import { Block } from "../../blocks/schemas/block.schema";

export type WorkerDocument = HydratedDocument<Worker>

@Schema({versionKey: false})
export class Worker {
    @Prop({required: true})
    name: string;
    
    @Prop()
    age: number;

    @Prop()
    exprience: number;
    
    @Prop({unique: true})
    phone_number: string;

    @Prop({unique: true})
    username: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Special"})
    special_id: Special;

    @Prop()
    description: string;

    @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref: "Block"}] })
    blocks: Block[];

}

export const WorkerScheme = SchemaFactory.createForClass(Worker)
