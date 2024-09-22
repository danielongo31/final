import { Module } from '@nestjs/common';
import { MiembroModule } from './miembro/miembro.module';
import { ActividadesModule } from './actividades/actividades.module';
import { PuntosModule } from './puntos/puntos.module';
import { CursoModule } from './curso/curso.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ActividadesEntity from './actividades/entity/Actividades.entity';
import CursoEntity from './curso/entity/Curso.entity';
import MiembroEntity from './miembro/entity/Miembro.entity';
import PuntosEntity from './puntos/entity/Puntos.entity';
import RolEntity from './rol/entity/Rol.entity';
import { RolModule } from './rol/rol.module';
import UserEntity from './user/entity/User.Entity';
import { UserModule } from './user/user.module';
import EventosEntity from './eventos/entity/Eventos.entity';
import { EventoModule } from './eventos/eventos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'iglesia',
      synchronize: true,
      logging: false,
      entities: [
        ActividadesEntity,
        CursoEntity,
        MiembroEntity,
        PuntosEntity,
        RolEntity,
        UserEntity,
        EventosEntity,
      ],
      charset: 'utf8_general_ci',
      autoLoadEntities: true
    }),
    MiembroModule,
    ActividadesModule,
    PuntosModule,
    CursoModule,
    RolModule,
    UserModule,
    EventoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
