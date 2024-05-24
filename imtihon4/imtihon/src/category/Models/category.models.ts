import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryCreateAttrs{
    name: string;
}


@Table({tableName: "category"})
export class Category extends Model<Category, CategoryCreateAttrs>{
    @ApiProperty({example: 1, description: "id serial"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: "Category", description: "categoryni name"})
    @Column({
        type: DataType.STRING,
    })
    name: string;
}
