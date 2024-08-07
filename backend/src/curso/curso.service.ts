import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CursoEntity from './entity/Curso.entity';


@Injectable()
export class CursoService {

    constructor (
        @InjectRepository(CursoEntity) private readonly repository : Repository<CursoEntity>
    ) { }

};