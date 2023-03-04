import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '@user/user.service';
import { EmailUserDto } from './dto/EmailUser.dto';
import { UserResponseDto } from './dto/UserResponse.dto';
import { User } from '@user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(emailUserDto: EmailUserDto): Promise<UserResponseDto> {
        const email = emailUserDto.email;

        const user = await this.userService.findOne({email});
        if(!user) throw new BadRequestException();

        if(!(await bcrypt.compare(emailUserDto.password, user.password))) {
            throw new UnauthorizedException();
        }

        const access_token = await this.generateToken(user);

        return {
            email: user.email,
            access_token
        }
    }

    async generateToken(user: User): Promise<string> {
        const access_token = this.jwtService.sign({
                password: user.password,
                userId: user.userId,
            });
        return access_token;
    }
}
