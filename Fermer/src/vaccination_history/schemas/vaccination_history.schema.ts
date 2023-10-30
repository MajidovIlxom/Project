import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type VaccinationHistoryDocument = HydratedDocument<VaccinationHistory>

@Schema()
export class VaccinationHistory {
    @Prop()
    animal_id: number;
    
    @Prop()
    vaccine_type_id: Date;
    
    @Prop()
    vaccine_date: Date;
    
    @Prop()
    next_vaccination_date: number;
    
    @Prop()
    vaccination_photo: string;
    worker_id: number;
}
export const VaccinationHistoryScheme = SchemaFactory.createForClass(VaccinationHistory)
