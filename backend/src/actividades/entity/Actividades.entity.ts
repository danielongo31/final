import CursoEntity from "src/curso/entity/Curso.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'actividades'
})
export default class ActividadesEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    descripcion: string;

    @Column()
    fecha: Date;

    @ManyToOne(() => CursoEntity, (curso) => curso.actividades)
    curso: CursoEntity;

};