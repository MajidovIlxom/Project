import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "../../category/Models/category.models";

interface ProductCreateAttrs{
    name: string;
    catigory_id: number;
    photo: string;
    title: string;
    price: number;
    description: string;
    count: number;
    is_active: boolean; 
}

@Table({tableName: "product"})
export class Product extends Model<Product, ProductCreateAttrs>{
    @ApiProperty({example: 1, description: "id serial"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @ApiProperty({example: "Name", description: "name"})
    @Column({
        type: DataType.STRING,
    })
    name: string;
    
    @ForeignKey(()=> Category)
    @ApiProperty({example: "category_id", description: "category id"})
    @Column({
        type: DataType.INTEGER,
    })
    catigory_id: number;


    @ApiProperty({example: "photo", description: "photo"})
    @Column({
        type: DataType.STRING,
    })
    photo: string;

    @ApiProperty({example: "title", description: "title"})
    @Column({
        type: DataType.STRING,
    })
    title: string;

    
    @ApiProperty({example: "price", description: "price"})
    @Column({
        type: DataType.INTEGER,
    })
    price: number;

    
    @ApiProperty({example: "description", description: "description"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    
    @ApiProperty({example: "count", description: "count"})
    @Column({
        type: DataType.INTEGER,
    })
    count: number;

    
    @ApiProperty({example: "Is active", description: "Is active"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    is_active: boolean;


    @BelongsTo(()=> Category)
    categorys: Category[];
}
