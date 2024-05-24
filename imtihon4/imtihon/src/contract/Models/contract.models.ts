import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Admin } from "../../admin/Models/admin.models";
import { Client } from "../../client/Models/client.models";
import { Product } from "../../product/Models/product.models";

interface ContractCreateAttrs {
    admin_id: number;
    client_id: number;
    product_id: number;
    region: string;
    district: string;
    address: string;
    month_data: Date;
    start_date: Date;
    end_date: Date;
    contract_terms: string;
    is_active: boolean
}


@Table({tableName: "contract"})
export class Contract extends Model<Contract, ContractCreateAttrs>{
    @ApiProperty({example: 1, description: "contract id serial"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Admin)
    @ApiProperty({example: 1, description: "admin id"})
    @Column({
        type: DataType.INTEGER,
    })
    admin_id: number;

    @ForeignKey(()=> Client)
    @ApiProperty({example: 1, description: "client id"})
    @Column({
        type: DataType.INTEGER,
    })
    client_id: number;

    @ForeignKey(() => Product)
    @ApiProperty({example: 1, description: "product id"})
    @Column({
        type: DataType.INTEGER,
    })
    product_id: number;

    @ApiProperty({example: "Region", description: "Region Client"})
    @Column({
        type: DataType.STRING,
    })
    region: string;

    @ApiProperty({example: "district", description: "district Client"})
    @Column({
        type: DataType.STRING,
    })
    district: string;


    @ApiProperty({example: "Address", description: "Address Client"})
    @Column({
        type: DataType.STRING,
    })
    address: string;

    @ApiProperty({example: "Month date", description: "Month Client"})
    @Column({
        type: DataType.DATE,
    })
    month_data: Date;

    @ApiProperty({example: "Start date", description: "Start date Client"})
    @Column({
        type: DataType.DATE,
    })
    start_date: Date;

    @ApiProperty({example: "End date", description: "End date Client"})
    @Column({
        type: DataType.DATE,
    })
    end_date: Date;

    @ApiProperty({example: "Contract terms", description: "Contract terms Client"})
    @Column({
        type: DataType.STRING,
    })
    contract_terms: string
    
    
    @ApiProperty({example: "Contract Is active", description: "Contract Is active Client"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    is_active: boolean


    @BelongsTo(()=> Admin)
    admin: Admin[];

    @BelongsTo(()=> Client)
    client: Client[];

    @BelongsTo(()=> Product)
    products: Product[];

}
