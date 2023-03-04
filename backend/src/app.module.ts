import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ProfileModule } from './modules/profile/profile.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    AuthModule,
    ProfileModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
