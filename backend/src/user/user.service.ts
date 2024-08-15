import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import UserEntity from "./entity/User.entity";

@Injectable()
export class UserService{

    constructor (
        @InjectRepository(UserEntity) private readonly respository : Repository<UserEntity>
    ) { }

    async getAll(){
        return await this.respository.find();
    }

    async getById(id: number){
        const resultado = await this.respository.findOneBy({ id: id });

        return resultado;
    }

    async auth(user: UserEntity){
        const resultado = await this.respository.findOneBy({ correo: user.correo });

        if ( resultado.password != user.password ) {
            throw new HttpException ("Contraseña incorrecta", 500);
        }

        return resultado;
    }

    async create(user: Object){
        const resultado = await this.respository.save(user);

        return resultado;
    }

    async update(id: number, user: Object){
        await this.respository.update(id, user);

        return true;
    }

    async delete(id: number){
        await this.respository.delete(id);

        return true;
    }
}