import CursoEntity from "src/curso/entity/Curso.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name : 'Actividades'
})
export default class ActividadesEntity
{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(() => CursoEntity, (curso) => curso.actividades)
    cursos: CursoEntity[];
    
};