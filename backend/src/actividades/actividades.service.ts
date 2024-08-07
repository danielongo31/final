import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ActividadesEntity from './entity/Actividades.entity';


@Injectable()
export class ActividadesService {

    constructor (
        @InjectRepository(ActividadesEntity) private readonly repository : Repository<ActividadesEntity>
    ) { }


};