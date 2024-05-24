export class CreateVaccinationHistoryDto {
    animal_id: number;
    vaccine_type_id: Date;
    vaccine_date: Date;
    next_vaccination_date: number;
    vaccination_photo: string;
    worker_id: number;
}
