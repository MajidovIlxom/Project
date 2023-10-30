import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @Type(()=> Number)
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;
}
