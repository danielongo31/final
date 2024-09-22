import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EventosService } from '../eventos.service';



@Controller('/eventos')
export class EventosController {

    constructor (private readonly service : EventosService) {}

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
    async create(@Body() evento: Object) {
        const resultado = await this.service.create(evento);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() evento: Object) {
        const resultado = await this.service.update(id, evento);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);

        return true;
    }


};