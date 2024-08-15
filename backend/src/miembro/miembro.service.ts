import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MiembroEntity from './entity/Miembro.entity';
import CursoEntity from 'src/curso/entity/Curso.entity';
import PuntosEntity from 'src/puntos/entity/Puntos.entity';

@Injectable()
export class MiembroService {

    constructor(
        @InjectRepository(MiembroEntity) private readonly repository: Repository<MiembroEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        
        return resultado;
    }

    async getByCurso(cursoid: number) {
        const curso = new CursoEntity();
        curso.id = cursoid;

        const resultado = await this.repository.findBy({ curso: curso })

        return resultado;
    }

    async create(miembro: MiembroEntity) {
        const puntos = new PuntosEntity();
        puntos.biblia = 0
        puntos.ofrenda = 0
        puntos.participacion = 0
        miembro.puntos = puntos;
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