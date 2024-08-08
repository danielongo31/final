import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ActividadesEntity from './entity/Actividades.entity';
import CursoEntity from 'src/curso/entity/Curso.entity';


@Injectable()
export class ActividadesService {

    constructor (
        @InjectRepository(ActividadesEntity) private readonly repository : Repository<ActividadesEntity>
    ) { }

    async getAll(){
        return await this.repository.find();
    }

    async getById(id: number){
        const resultado = await this.repository.findOneBy({ id: id});

        return resultado;

    }

    async getByCurso(cursoid: number){
        const curso = new CursoEntity();
        curso.id = cursoid;

        const resultado = await this.repository.findBy({ curso: curso })

        return resultado;
    }

    async create(actividad: Object){
        const resultado = await this.repository.save(actividad);

        return resultado;
    }

    async update(id: number, actividad: object){
        await this.repository.update(id, actividad);

        return true;
    }

    async delete(id: number){
        await this.repository.delete(id);

        return true;
    }



};