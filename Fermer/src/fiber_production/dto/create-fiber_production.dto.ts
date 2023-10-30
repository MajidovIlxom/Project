import { IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class CreateFiberProductionDto {
    
    @IsNotEmpty()
    @IsNumber()
    fiber_yield: number;
    
    @IsNotEmpty()
    @IsNumber()
    shearing_schedule: number;
    
    @IsNotEmpty()
    @IsNumber()
    fiber_quality: number;
    
    @IsNotEmpty()
    @IsNumber()
    animal_id: number;
}
