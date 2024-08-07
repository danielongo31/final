import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PuntosEntity from './entity/Puntos.entity';


@Injectable()
export class PuntosService {

    constructor (
        @InjectRepository(PuntosEntity) private readonly repository : Repository<PuntosEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async update(id: number, puntos: Object) {
        await this.repository.update(id, puntos);

        return true;
    }


};