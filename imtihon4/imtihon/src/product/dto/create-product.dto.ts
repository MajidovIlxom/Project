import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    catigory_id: number;
    
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @Type(()=> Number)
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @Type(()=> Number)
    count: number;
}
