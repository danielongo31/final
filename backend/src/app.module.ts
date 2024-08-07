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
      ],
      charset: 'utf8_general_ci',
      autoLoadEntities: true
    }),
    MiembroModule,
    ActividadesModule,
    PuntosModule,
    CursoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
