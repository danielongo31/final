import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ActividadesService } from '../actividades.service';


@Controller('/actividades')
export class ActividadesController {

    constructor (private readonly service : ActividadesService) {}


};