import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from "class-validator";



export class UpdateAdminDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    fullName: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsPhoneNumber()
    @IsOptional()
    phoneNumber: string;

    @IsString()
    @IsOptional()
    tg_link: string;

    @IsStrongPassword()
    @MinLength(6)
    @IsOptional()
    password: string;

    @IsStrongPassword()
    @MinLength(6)
    @IsOptional()
    confirmPassword: string;

    @IsString()
    @IsOptional()
    description: string;
}
