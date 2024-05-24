import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


export enum Role {
    ADMIN = 'admin',
    VENDOR = 'vendor',
  }
  

interface AdminCreateAttrs {
    username: string;
    email: string;
    hashed_password: string;
    role: Role; 
    telegram_link: string;
    is_active: boolean;
    hashed_refresh_token: string;
  }
  
@Table({tableName: "admin"})
export class Admin extends Model<Admin, AdminCreateAttrs>{
    @ApiProperty({example: 1, description: "Id Serial"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @ApiProperty({example: "username", description: "Admin username"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    username: string;
    


    @ApiProperty({example: "email", description: "Admin email"})
    @Column({
        type: DataType.STRING,
    })
    email: string;


    @ApiProperty({example: "Hashed_Password", description: "Admin password"})
    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;


    @ApiProperty({ example: 'admin', description: 'Admin role' })
    @Column({
        type: DataType.ENUM(...Object.values(Role)),
        allowNull: false,
        })
    role: Role;


    @ApiProperty({example: "telegaram link", description: "Admin telegram link"})
    @Column({
        type: DataType.STRING,
    })
    telegram_link: string;

    @ApiProperty({example: "Is_active", description: "Admin is_active"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;

    @ApiProperty({example: "hashed_refresh_token", description: "Admin hashed_ refresh_token"})
    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;


    @Column({
        type: DataType.STRING,
    })
    activation_link: string;
}
