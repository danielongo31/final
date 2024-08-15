import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserEntity from "./entity/User.entity";
import { UserService } from "./user.service";
import { UserController } from "./http/user.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}