import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";

export class LogenClientDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword()
    @MinLength(6)
    hashed_password: string;
}