import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './repository/profile.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile])
  ],
  controllers: [ProfileController],
  providers: [
    ProfileService,
    ProfileRepository
  ]
})
export class ProfileModule {}
