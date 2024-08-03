import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../user.service';

@Controller('/user')
export class UserController {

    constructor (private readonly service : UserService) {}

    @Get()
    async getAll() {
        return await this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number) {
        const resultado = await this.service.getById(id);

        return resultado;
    }

    @Post()
    async create(@Body() user: Object) {
        const resultado = await this.service.create(user);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() user: Object) {
        const resultado = await this.service.update(id, user);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);

        return true;
    }

};