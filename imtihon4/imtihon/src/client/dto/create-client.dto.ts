import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateClientDto {
    
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword()
    @IsNotEmpty()
    hashed_password: string;
    
    @IsStrongPassword()
    @IsNotEmpty()
    confirm_password: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    passport_series: string;

    @IsString()
    @IsNotEmpty()
    telegram_link: string;
}
