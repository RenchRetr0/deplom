import { Controller, Post, Body, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './service/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
        await this.userService.createUser(createUserDto);

        res.statusCode = HttpStatus.CREATED;
        return res.send('user created');
    }

    @Get('getAll')
    async getAll() {
        return await this.userService.getAll();
    }
}
