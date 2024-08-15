import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RolService } from '../rol.service';


@Controller('/rol')
export class RolController {

    constructor (private readonly service : RolService) {}

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
    async create(@Body() rol: Object) {
        const resultado = await this.service.create(rol);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() rol: Object) {
        const resultado = await this.service.update(id, rol);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);

        return true;
    }

};