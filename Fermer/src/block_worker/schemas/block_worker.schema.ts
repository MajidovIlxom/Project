import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Block } from "../../blocks/schemas/block.schema";
import { Worker } from "../../worker/schemas/worker.schema";

export type BlockWorkerDucument = HydratedDocument<BlockWorker>

@Schema({versionKey: false})
export class BlockWorker {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Worker"})
    worker_id: Worker;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Block"})
    block_id: Block;

}


export const BlockWorkerScheme = SchemaFactory.createForClass(BlockWorker)