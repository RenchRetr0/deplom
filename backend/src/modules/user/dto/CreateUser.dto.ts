import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, Length, Matches, ValidateNested } from "class-validator"
import { MESSAGE, REGEX } from "src/app.utils"
import { CreateProfileDto } from "./CreateProfile.dto"

export class CreateUserDto {

    @IsNotEmpty()
    @Type(() => CreateProfileDto)
    @ValidateNested({ each: true })
    readonly profil: CreateProfileDto;

    @IsEmail()
    @IsNotEmpty({ message: 'Email cannot be empty' })
    readonly email: string

    @IsNotEmpty({ message: 'Password cannot be empty.' })
    @Length(8)
    @Matches(
        REGEX.PASSWORD_RULE,
        { message: MESSAGE.PASSWORD_RULE_MESSAGE},
    )
    readonly password: string
}