import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MiembroService } from '../miembro.service';
import MiembroEntity from '../entity/Miembro.entity';
import MiembroResponseDTO from '../dto/response/MiembroResponse.dto';
import { promises } from 'dns';


@Controller('/miembro')
export class MiembroController {

    constructor (private readonly service : MiembroService) {}

    @Get()
    async getAll(): Promise<MiembroResponseDTO[]>{
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