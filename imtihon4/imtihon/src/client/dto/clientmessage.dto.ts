import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class ClientMessageDto {
    @IsPhoneNumber()
    @IsNotEmpty()
    phone_number: string;
  
    @IsNotEmpty()
    message: string;
    
    @IsNotEmpty()
    user_name: string;
  }
  