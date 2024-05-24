import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Contract } from "../../contract/Models/contract.models";
import { Client } from "../../client/Models/client.models";

export enum Payment_method {
    ONLINE = "by_card",
    OFFLINE = "cash",
}


interface PaymentCreateAttrs{
    contract_id: number;
    client_id: number;
    month_date: Date;
    price: number;
    payment_method: Payment_method
}

@Table({tableName: "payment"})
export class Payment extends Model<Payment, PaymentCreateAttrs>{
    @ApiProperty({example: 1, description: "Id serial"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(()=> Contract)
    @ApiProperty({example: "contract_id", description: "contract id"})
    @Column({
        type: DataType.INTEGER,
    })
    contract_id: number;
    
    @ForeignKey(()=> Client)
    @ApiProperty({example: "client_id", description: "client_id"})
    @Column({
        type: DataType.INTEGER,
    })
    client_id: number;

    @ApiProperty({example: "month date", description: "month date"})
    @Column({
        type: DataType.DATE,
    })
    month_date: Date;

    

    @ApiProperty({example: "Price", description: "Price "})
    @Column({
        type: DataType.INTEGER,
    })
    price: number;

    

    @ApiProperty({example: "payment method", description: "Payment method "}) 
    @Column({
        type: DataType.ENUM(...Object.values(Payment_method)),
    })
    payment_method: Payment_method;


    @BelongsTo(()=> Contract)
    contracts: Contract[];
    
    @BelongsTo(()=> Client)
    client: Client;
}
