import mongoose from "mongoose";

export class CreateWorkerDto {
    name: string;   
    age: number;
    exprience: number;   
    phone_number: string;
    username: string;
    special_id: mongoose.Schema.Types.ObjectId;
    description: string;
}
