import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose"

export type RecordDocument = HydratedDocument<RecordOfIlness>;

@Schema()
export class RecordOfIlness {
    @ApiProperty({example: "d", description: ""})
    @Prop()
    animals_id: number;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    ilness_type: Date;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    date_disease: string;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    medicines: Date;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    date_treatment: string;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    illness_photo: string;
    
    
    @ApiProperty({example: "d", description: ""})
    @Prop()
    worker_id: number;
}

export const RecordSchema = SchemaFactory.createForClass(RecordOfIlness);