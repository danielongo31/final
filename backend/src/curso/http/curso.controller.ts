import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CursoService } from '../curso.service';


@Controller('/curso')
export class CursoController {

    constructor (private readonly service : CursoService) {}

   


};