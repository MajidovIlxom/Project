import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type VaccineDocument = HydratedDocument<Vaccine>

@Schema({versionKey: false})
export class Vaccine {
    @Prop()
    vaccine_type: string;

    @Prop()
    vaccine_name: string;

    // @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref: "Worker"}] })
    // workers: Worker[];


}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine)