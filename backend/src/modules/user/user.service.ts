import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './entitys/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: UserRepository) {}

    async createUser(userDTO: CreateUserDto): Promise<User> {
        return await this.userRepository.save(userDTO);
    }
}
