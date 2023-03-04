import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDto } from './dto/createProfile.dto';
import { Profile } from './entities/profile.entity';
import { ProfileRepository } from './repository/profile.repository';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private profileRepository: ProfileRepository) {}

    async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
        const profile: Profile = Profile.create({
            last_name: createProfileDto.last_name,
            first_name: createProfileDto.first_name,
            patronymic: createProfileDto.patronymic,
            phone: createProfileDto.phone
        });
        
        return await this.profileRepository.save(profile);
    }
}
