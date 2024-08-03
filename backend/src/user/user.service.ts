import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from './entity/User.entity';

@Injectable()
export class UserService {

    constructor (
        @InjectRepository(UserEntity) private readonly repository : Repository<UserEntity>
    ) { }

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const resultado = await this.repository.findOneBy({ id: id });

        return resultado;
    }

    async create(user: Object) {
        const resultado = await this.repository.save(user);

        return resultado;
    }

    async update(id: number, user: Object) {
        await this.repository.update(id, user);

        return true;
    }

    async delete(id: number) {
        await this.repository.delete(id);

        return true;
    }

};