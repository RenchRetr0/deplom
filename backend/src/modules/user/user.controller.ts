import { Controller, Post, Body, ValidationPipe, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { PhoneDto } from './dto/Phone.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('create')
    async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Post('phone')
    async phone(@Param() phone: PhoneDto) {
        return phone;
    }
}
