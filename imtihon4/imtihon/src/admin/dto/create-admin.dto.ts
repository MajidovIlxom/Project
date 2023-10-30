import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";


export enum Role {
    ADMIN = 'admin',
    VENDOR = 'vendor',
  }


export class CreateAdminDto {
    
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

    @IsEnum(Role)
    @IsNotEmpty()
    role: Role; 
    
    @IsString()
    @IsNotEmpty()
    telegram_link: string;

}
