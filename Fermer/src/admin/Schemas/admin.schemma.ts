import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose"

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {

    @ApiProperty({example: "Admin fullName", description: "Admin fullName"})
    @Prop({required: true})
    fullName: string

    @ApiProperty({example: "Admin email", description: "Admin email"})
    @Prop({required: true})
    email: string

    @ApiProperty({example: "Admin phone number", description: "Admin phone number"})
    @Prop({required: true})
    phoneNumber: number

    @ApiProperty({example: "Admin tg_link", description: "Admin tg_link"})
    @Prop({required: true})
    tg_link: string

    @ApiProperty({example: "Admin password", description: "Admin hashed password"})
    @Prop({required: true})
    hashed_password: string

    @ApiProperty({example: "Admin token", description: "Admin token"})
    @Prop()
    hashed_token: string

    @ApiProperty({example: "Admin is active", description: "Admin is Active"})
    @Prop({default: true})
    is_active: boolean

    @ApiProperty({example: "Admin is creator", description: "Admin is creator"})
    @Prop({default: true})
    is_creator: boolean

    @ApiProperty({example: "Admin description", description: "Admin description"})
    @Prop()
    description: string
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

