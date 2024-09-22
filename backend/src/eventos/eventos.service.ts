import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EventosEntity from './entity/Eventos.entity';


@Injectable()
export class EventosService {

    constructor (
        @InjectRepository(EventosEntity) private readonly repository : Repository<EventosEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        return resultado;
    }

    async create(evento: Object) {
        const resultado = await this.repository.save(evento);

        return resultado;
    }

    async update(id: number, evento: Object) {
        await this.repository.update(id, evento);

        return true;
    }

    async delete(id: number) {
        await this.repository.delete(id);

        return true;
    }

};