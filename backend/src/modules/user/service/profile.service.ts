import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDto } from '../dto/CreateProfile.dto';
import { Profile } from '../entitys/profile.entity';
import { ProfileRepository } from '../repositores/profile.repository';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private profileRepository: ProfileRepository) {}

    async createUser(profileDTO: CreateProfileDto): Promise<Profile> {
        return await this.profileRepository.save(profileDTO);
    }
}
