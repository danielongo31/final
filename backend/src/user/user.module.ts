import { Module } from '@nestjs/common';
import { UserController } from './http/user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './entity/User.entity';
import UserDetailEntity from './entity/UserDetail.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, UserDetailEntity])
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
