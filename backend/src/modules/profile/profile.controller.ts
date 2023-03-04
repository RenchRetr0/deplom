import { Controller, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/createProfile.dto';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService){}

    @Post('create')
    async create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
        return await this.profileService.createProfile(createProfileDto);
    }
}
