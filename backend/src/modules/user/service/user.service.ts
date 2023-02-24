import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from '../dto/CreateUser.dto';
import { User } from '../entitys/user.entity';
import { UserRepository } from '../repositores/user.repository';
import { ProfileService } from './profile.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: UserRepository,
        private profilService: ProfileService
    ) {}

    async createUser(userDTO: CreateUserDto): Promise<User> {
        const result = await this.userExists(userDTO.email);

        const profile = await this.profilService.createUser(userDTO.profil);

        const user = await this.userRepository.create({
            email: userDTO.email,
            password: userDTO.password,
            profileId: profile
        });

        return await user.save();
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find({relations: {profileId: true}});
    }

    async findOne(userFilterQuery): Promise<User> {
        return await this.userRepository.findOne({where: userFilterQuery});
    }

    async userExists(email: string): Promise<boolean> {

        if( await this.findOne({email})) {
            throw new HttpException('Email busy.', HttpStatus.UNAUTHORIZED);
        }

        return false;
    }
}
