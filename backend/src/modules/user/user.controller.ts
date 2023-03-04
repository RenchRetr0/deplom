import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.createUser(createUserDto);
    }
}
