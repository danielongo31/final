import MiembroEntity from "src/miembro/entity/Miembro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'rol'
})
export default class RolEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => MiembroEntity, (miembros) => miembros.rol)
    miembros: MiembroEntity[];
}