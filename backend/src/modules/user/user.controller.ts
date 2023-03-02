import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './service/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto): Promise<string> {
        await this.userService.createUser(createUserDto);
        return 'user created';
    }

    @Get('getAll')
    async getAll() {
        return await this.userService.getAll();
    }
}
