import { Module } from '@nestjs/common';
import { ActividadesController} from './http/actividades.controller';
import { ActividadesService} from './actividades.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ActividadesEntity from '../actividades/entity/Actividades.entity';
;

@Module({
    imports: [
        TypeOrmModule.forFeature([ActividadesEntity])
    ],
    controllers: [ActividadesController],
    providers: [ActividadesService]
})
export class ActividadesModule {}
