import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MiembroService } from '../miembro.service';
import MiembroEntity from '../entity/Miembro.entity';


@Controller('/miembro')
export class MiembroController {

    constructor (private readonly service : MiembroService) {}

    @Get()
    async getAll() {
        return await this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number) {
        const resultado = await this.service.getById(id);

        return resultado;
    }

    @Get('/curso/:cursoid')
    async getByCurso(@Param('cursoid') cursoid: number){
        const resultado = await this.service.getByCurso(cursoid)

        return resultado;
    }

    @Post()
    async create(@Body() miembro: MiembroEntity) {
        const resultado = await this.service.create(miembro);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() miembro: Object) {
        const resultado = await this.service.update(id, miembro);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        await this.service.delete(id);

        return true;
    }

};