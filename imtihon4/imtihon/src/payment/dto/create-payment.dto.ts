import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export enum Payment_method{
    ONLINE = "by_card",
    OFFLINE = "cash",
}


export class CreatePaymentDto {

    @IsNumber()
    @IsNotEmpty()
    contract_id: number;
    
    @IsNumber()
    @IsNotEmpty()
    client_id: number;

    @IsDateString()
    month_date: Date;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsEnum(Payment_method)
    @IsNotEmpty()
    payment_method: Payment_method
}





