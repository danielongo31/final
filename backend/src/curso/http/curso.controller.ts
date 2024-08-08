import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CursoService } from '../curso.service';


@Controller('/curso')
export class CursoController {

    constructor (private readonly service : CursoService) {}

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
    async create(@Body() curso: Object) {
        const resultado = await this.service.create(curso);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() curso: Object) {
        const resultado = await this.service.update(id, curso);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);

        return true;
    }


};