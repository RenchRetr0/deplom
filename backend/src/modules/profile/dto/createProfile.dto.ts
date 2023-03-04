import { CreateDto } from "@common/dto/base.dto";
import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreateProfileDto extends CreateDto {

    @IsNotEmpty({ message: 'Last Name cannot be empty' })
    readonly last_name!: string;

    @IsNotEmpty({ message: 'First Name cannot be empty' })
    readonly first_name!: string;

    readonly patronymic: string;

    @IsNotEmpty({ message: 'Mobile phone number cannot be empty.' })
    @IsPhoneNumber('RU')
    readonly phone!: string;
}