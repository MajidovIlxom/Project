import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateAnimalDto {
    @IsNotEmpty()
    animal_type_id: mongoose.Schema.Types.ObjectId;
}
