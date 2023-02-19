import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator"
import { MESSAGE, REGEX } from "src/app.utils"

export class CreateUserDto {

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