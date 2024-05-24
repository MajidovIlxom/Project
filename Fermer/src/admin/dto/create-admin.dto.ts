import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateAdminDto {
    
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phoneNumber: string;

    @IsString()
    tg_link: string;

    @IsStrongPassword()
    @MinLength(6)
    password: string;

    @IsStrongPassword()
    @MinLength(6)
    confirmPassword: string;

    @IsString()
    description: string;
}
