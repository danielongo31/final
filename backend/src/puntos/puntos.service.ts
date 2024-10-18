import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PuntosEntity from './entity/Puntos.entity';
import MiembroEntity from 'src/miembro/entity/Miembro.entity';
import MasiveRequestDTO from './dto/request/MasiveRequest.dto';


@Injectable()
export class PuntosService {

    constructor(
        @InjectRepository(PuntosEntity) private readonly repository: Repository<PuntosEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        return resultado;
    }

    async getByMiembro(miembroid: number) {
        const miembro = new MiembroEntity();
        miembro.id = miembroid;
        const resultado = await this.repository.findBy({ miembro });

        return resultado;
    }

    async create(puntos: Object) {
        const resultado = await this.repository.save(puntos);

        return resultado;
    }

    async update(id: number, puntos: Object) {
        await this.repository.update(id, puntos);

        return true;
    }

    async masive(puntos: MasiveRequestDTO) {
        const resultado = await this.repository.createQueryBuilder().update(PuntosEntity).set({totales: () => "totales + :incremento"}).where("id in (:...ids)", {ids: puntos.ids}).setParameter("incremento", puntos.totales).execute();

        return true;
    }

    async delete(id: number) {
        await this.repository.delete(id);

        return true;
    }

};