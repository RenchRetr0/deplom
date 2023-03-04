import { CreateDto } from "@common/dto/base.dto";
import { CreateProfileDto } from "@profile/dto/createProfile.dto";
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, Matches, ValidateNested } from "class-validator"
import { MESSAGE, REGEX } from "src/app.utils"

export class CreateUserDto extends CreateDto {

    @IsNotEmpty({message: "Profile cannot be empty."})
    @Type(() => CreateProfileDto)
    @ValidateNested({ each: true })
    readonly profile: CreateProfileDto;

    @IsEmail()
    @IsNotEmpty({ message: 'Email cannot be empty.' })
    readonly email: string

    @IsNotEmpty({ message: 'Password cannot be empty.' })
    @IsString()
    @Length(8)
    @Matches(
        REGEX.PASSWORD_RULE,
        { message: MESSAGE.PASSWORD_RULE_MESSAGE},
    )
    readonly password: string
}