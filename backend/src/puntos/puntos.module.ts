import { Module } from '@nestjs/common';
import { PuntosController} from './http/puntos.controller';
import { PuntosService} from './puntos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import PuntosEntity from './entity/Puntos.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([PuntosEntity])
    ],
    controllers: [PuntosController],
    providers: [PuntosService]
})
export class PuntosModule {}
