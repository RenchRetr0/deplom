import { Controller, Post, Body, UseGuards, Get, Request, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { EmailUserDto } from './dto/EmailUser.dto';
import { UserResponseDto } from './dto/UserResponse.dto';
import { RoleGuard } from './guards/rules-guard';
import { JWTAuthGuard } from './jwt-auth.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signIn')
    async signIn(@Body() emailUserDto: EmailUserDto, @Res() res: Response) {
        const userSignIn = await this.authService.signIn(emailUserDto);

        res.statusCode = HttpStatus.OK;
        return res.send({ userSignIn });
    }

    @UseGuards(JWTAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any> {
        return req.user;
    }

    @UseGuards(JWTAuthGuard, RoleGuard)
    @Roles('admin')
    @Get('admin')
    async admin(@Request() req): Promise<any> {
        return req.user;
    }
}
