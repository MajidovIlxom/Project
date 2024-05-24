// import { PartialType } from '@nestjs/swagger';
// import { CreateContractDto } from './create-contract.dto';

// export class UpdateContractDto extends PartialType(CreateContractDto) {}



import { IsDateString, IsNotEmpty } from "class-validator";

export class UpdateContractDto {
    @IsNotEmpty()
    @IsDateString()
    month_data: Date;

    @IsNotEmpty()
    @IsDateString()
    start_date: Date;

    @IsNotEmpty()
    @IsDateString()
    end_date: Date;
}
