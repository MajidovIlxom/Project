import { IsNotEmpty, IsString } from "class-validator";

export class CreateAnimalTypeDto {
    @IsString()
    @IsNotEmpty()
    type_name: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;
}
