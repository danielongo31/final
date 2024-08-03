import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './user/entity/User.entity';
import UserDetailEntity from './user/entity/UserDetail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'daniel',
      synchronize: true,
      logging: false,
      entities: [
        UserEntity,
        UserDetailEntity
      ],
      charset: 'utf8_general_ci'
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
