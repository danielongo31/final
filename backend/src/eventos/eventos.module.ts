import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import EventosEntity from './entity/Eventos.entity';
import { EventosController } from './http/eventos.controller';
import { EventosService } from './eventos.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([EventosEntity])
    ],
    controllers: [EventosController],
    providers: [EventosService]
})
export class EventoModule {}
