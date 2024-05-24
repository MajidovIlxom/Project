import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateContractDto {
    
    @IsNotEmpty()
    @IsNumber()
    admin_id: number;

    @IsNotEmpty()
    @IsNumber()
    client_id: number;

    @IsNotEmpty()
    @IsNumber()
    product_id: number;

    @IsNotEmpty()
    @IsString()
    region: string;

    @IsNotEmpty()
    @IsString()
    district: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsDateString()
    month_data: Date;

    @IsNotEmpty()
    @IsDateString()
    start_date: Date;

    @IsNotEmpty()
    @IsDateString()
    end_date: Date;

    @IsNotEmpty()
    @IsString()
    contract_terms: string;
}
