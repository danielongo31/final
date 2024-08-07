import { Module } from '@nestjs/common';
import { MiembroController} from './http/miembro.controller';
import { MiembroService} from './miembro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import MiembroEntity from './entity/Miembro.entity';


@Module({   
    imports: [
        TypeOrmModule.forFeature([MiembroEntity])
    ],
    controllers: [MiembroController],
    providers: [MiembroService]
})
export class MiembroModule {}
