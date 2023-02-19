import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class PhoneDto {
    // @IsNotEmpty({ message: 'Mobile phone number cannot be empty.' })
    @IsPhoneNumber('RU')
    readonly phone: string;
}