import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PuntosService } from '../puntos.service';


@Controller('/puntos')
export class PuntosController {

    constructor (private readonly service : PuntosService) {}

    @Get('/:id')
    async getById(@Param('id') id: number) {
        const resultado = await this.service.getById(id);

        return resultado;
    }

    @Post()
    async create(@Body() puntos: Object) {
        const resultado = await this.service.create(puntos);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() puntos: Object) {
        const resultado = await this.service.update(id, puntos);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);

        return true;
    }
};