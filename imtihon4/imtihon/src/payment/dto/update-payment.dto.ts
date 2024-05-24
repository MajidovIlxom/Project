import { IsEnum, IsNotEmpty } from "class-validator";

export enum Payment_method{
    ONLINE = "by_card",
    OFFLINE = "cash",
}


export class UpdatePaymentDto {

    @IsEnum(Payment_method)
    @IsNotEmpty()
    payment_method: Payment_method
}





