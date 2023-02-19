import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './entitys/user.entity';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository
  ]
})
export class UserModule {}