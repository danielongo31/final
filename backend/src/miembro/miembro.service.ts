import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MiembroEntity from './entity/Miembro.entity';

@Injectable()
export class MiembroService {

    constructor (
        @InjectRepository(MiembroEntity) private readonly repository : Repository<MiembroEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        return resultado;
    }

    async create(miembro: Object) {
        const resultado = await this.repository.save(miembro);

        return resultado;
    }

    async update(id: number, miembro: Object) {
        await this.repository.update(id, miembro);

        return true;
    }

    async delete(id: number) {
        await this.repository.delete(id);

        return true;
    }

};