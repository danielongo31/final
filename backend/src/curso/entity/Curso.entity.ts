import ActividadesEntity from "src/actividades/entity/Actividades.entity";
import MiembroEntity from "src/miembro/entity/Miembro.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'cursos'
})
export default class CursoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => ActividadesEntity, (actividad) => actividad.curso)
    actividades: ActividadesEntity[];

    @OneToMany(() => MiembroEntity, (miembro) => miembro.curso)
    miembros: MiembroEntity[];

};