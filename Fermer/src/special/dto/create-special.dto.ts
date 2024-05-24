import { IsNotEmpty, IsString } from "class-validator";

export class CreateSpecialDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
