import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CursoEntity from './entity/Curso.entity';


@Injectable()
export class CursoService {

    constructor (
        @InjectRepository(CursoEntity) private readonly repository : Repository<CursoEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        return resultado;
    }

    async create(curso: Object) {
        const resultado = await this.repository.save(curso);

        return resultado;
    }

    async update(id: number, curso: Object) {
        await this.repository.update(id, curso);

        return true;
    }

    async delete(id: number) {
        await this.repository.delete(id);

        return true;
    }

};