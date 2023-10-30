import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

export type MilkProductionDocument = HydratedDocument<MilkProduction>

@Schema()
export class MilkProduction {
    
    
    @ApiProperty({example: "", description: ""})
    @Prop()
    milk_yield: number;
    
    
    @ApiProperty({example: "", description: ""})
    @Prop()
    milk_schedule: number;
    
    
    @ApiProperty({example: "", description: ""})
    @Prop()
    milk_qualite: number;
    
    
    @ApiProperty({example: "", description: ""})
    @Prop()
    animal_id: number;

}
export const MilkSchema = SchemaFactory.createForClass(MilkProduction);