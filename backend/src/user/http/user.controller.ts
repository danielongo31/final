import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "../user.service";
import UserEntity from "../entity/User.Entity";

@Controller('/user')
export class UserController{

    constructor (private readonly service : UserService) {}

    @Get()
    async getAll(){
        return await this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number){
        const resultado = await this.service.getById(id);

        return resultado;
    }

    @Post()
    async create (@Body() user: object){
        const resultado = await this.service.create(user);

        return resultado;
    }

    @Post('/auth')
    async auth (@Body() user: UserEntity){
        const resultado = await this.service.auth(user);

        return resultado;
    }

    @Patch('/:id')
    async update (@Param('id') id: number, @Body() user: Object){
        const resultado = await this.service.update(id, user);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number){
        await this.service.delete(id)

        return true;
    }
};