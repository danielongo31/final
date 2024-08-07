import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PuntosService } from '../puntos.service';


@Controller('/puntos')
export class PuntosController {

    constructor (private readonly service : PuntosService) {}

    @Get()
    async getAll() {
        return await this.service.getAll();
    }


    @Patch('/:id')
    async update(@Param('id') id: number, @Body() puntos: Object) {
        const resultado = await this.service.update(id, puntos);

        return resultado;
    }


};