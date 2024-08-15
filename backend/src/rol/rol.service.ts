import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import RolEntity from './entity/Rol.entity';

@Injectable()
export class RolService {

    constructor (
        @InjectRepository(RolEntity) private readonly repository : Repository<RolEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        return resultado;
    }

    async create(rol: Object) {
        const resultado = await this.repository.save(rol);

        return resultado;
    }

    async update(id: number, rol: Object) {
        await this.repository.update(id, rol);

        return true;
    }

    async delete(id: number) {
        await this.repository.delete(id);

        return true;
    }

};