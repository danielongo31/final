import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ActividadesService } from '../actividades.service';


@Controller('/actividades')
export class ActividadesController {

    constructor (private readonly service : ActividadesService) {}

    @Get()
    async getAll(){
        return await this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number){
        const resultado = await this.service.getById(id);

        return resultado;
    }

    @Get('/curso/:cursoid')
    async getByCurso(@Param('cursoid') cursoid: number){
        const resultado = await this.service.getByCurso(cursoid)

        return resultado;
    }

    @Post()
    async create(@Body() actividad: object){
        const resultado = await this.service.create(actividad);

        return resultado;
    }

    @Patch('/:id')
    async update(@Param('id') id: number, @Body() actividad: Object){
        const resultado = await this.service.update(id, actividad);

        return resultado;
    }

    @Delete('/:id')
    async delete(@Param('id') id: number){
        await this.service.delete(id)

        return true;
    }

};