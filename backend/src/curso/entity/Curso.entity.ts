import ActividadesEntity from "src/actividades/entity/Actividades.entity";
import MiembroEntity from "src/miembro/entity/Miembro.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'cursos'
})
export default class CursoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(() => ActividadesEntity, (actividad) => actividad.cursos)
    actividad: ActividadesEntity;

    @ManyToOne(() => MiembroEntity, (miembro) => miembro.cursos)
    miembro: MiembroEntity;

};