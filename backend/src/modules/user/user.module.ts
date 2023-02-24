import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './entitys/user.entity';
import { UserRepository } from './repositores/user.repository';
import { UserService } from './service/user.service';
import { ProfileRepository } from './repositores/profile.repository';
import { Profile } from './entitys/profile.entity';
import { ProfileService } from './service/profile.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile])
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    ProfileRepository,
    ProfileService
  ],
  exports: [UserService]
})
export class UserModule {}
