import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: UserRepository) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const result = await this.emailExists(createUserDto.email);

        const user: User = User.create({
            profileId: createUserDto.profile,
            email: createUserDto.email,
            password: createUserDto.password
        });

        return await this.userRepository.save(user);
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find({relations: {profileId: true}});
    }

    async findOne(userFilterQuery): Promise<User> {
        return await this.userRepository.findOne({where: userFilterQuery});
    }

    async emailExists(email: string): Promise<boolean> {

        if( await this.findOne({email})) {
            throw new HttpException('Email busy.', HttpStatus.UNAUTHORIZED);
        }

        return false;
    }
}
