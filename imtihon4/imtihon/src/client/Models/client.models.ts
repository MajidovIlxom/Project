import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ClientCreateAttrs{
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    hashed_password: string;
    phone_number: string;
    address: string;
    passport_series: string;
    telegram_link: string;
    imege: string;
    is_active: boolean;
    hashed_refresh_token: string;  
}

@Table({tableName: "client"})
export class Client extends Model<Client, ClientCreateAttrs>{
    @ApiProperty({example: 1, description: "id serial"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @ApiProperty({example: "first_name", description: "Client first name"})
    @Column({
        type: DataType.STRING,
    })
    first_name: string;


    @ApiProperty({example: "last_name", description: "Client last name"})
    @Column({
        type: DataType.STRING,
    })
    last_name: string;

    @ApiProperty({example: "username", description: "Admin username"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    username: string;


    @ApiProperty({example: "email", description: "Client email"})
    @Column({
        type: DataType.STRING,
    })
    email: string;


    @ApiProperty({example: "hashed_password", description: "Client hashed_password"})
    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;


    @ApiProperty({example: "phone_number", description: "Client phone_number"})
    @Column({
        type: DataType.STRING,
    })
    phone_number: string;


    @ApiProperty({example: "address", description: "Client address"})
    @Column({
        type: DataType.STRING,
    })
    address: string;


    @ApiProperty({example: "passport", description: "Client passport"})
    @Column({
        type: DataType.STRING,
    })
    passport_series: string;


    @ApiProperty({example: "telegram_link", description: "Client telegram_link"})
    @Column({
        type: DataType.STRING,
    })
    telegram_link: string;

    @ApiProperty({example: "imege", description: "Client imege"})
    @Column({
        type: DataType.STRING,
    })
    imege: string;

    @ApiProperty({example: "Is active", description: "Client is active"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;


    @ApiProperty({example: "hashed_refresh_token", description: "Client hashed_refresh_token"})
    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @Column({
        type: DataType.STRING,
    })
    activation_link: string;
}
