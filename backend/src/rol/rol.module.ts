import { Module } from '@nestjs/common';
import { RolController } from './http/rol.controller';
import { RolService } from './rol.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import RolEntity from './entity/Rol.entity';



@Module({   
    imports: [
        TypeOrmModule.forFeature([RolEntity])
    ],
    controllers: [RolController],
    providers: [RolService]
})
export class RolModule {}
