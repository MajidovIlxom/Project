import { IsNotEmpty } from "class-validator";

export class AdminMessageDto{
    
    @IsNotEmpty()
    month_data: Date;
}