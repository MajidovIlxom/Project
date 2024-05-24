import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose"

export type FiberDocument = HydratedDocument<FiberProduction>;

@Schema()
export class FiberProduction {
    @ApiProperty({example: "d", description: ""})
    @Prop()
    fiber_yield: number;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    shearing_schedule: number;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    fiber_quality: number;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    animal_id: number;
}

export const FiberSchema = SchemaFactory.createForClass(FiberProduction);