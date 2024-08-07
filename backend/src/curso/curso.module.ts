import { Module } from '@nestjs/common';
import { CursoController} from './http/curso.controller';
import { CursoService} from './curso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import CursoEntity from './entity/Curso.entity';
;

@Module({
    imports: [
        TypeOrmModule.forFeature([CursoEntity])
    ],
    controllers: [CursoController],
    providers: [CursoService]
})
export class CursoModule {}
