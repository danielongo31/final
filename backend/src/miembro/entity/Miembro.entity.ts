import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import CursoEntity from "../../curso/entity/Curso.entity";
import PuntosEntity from "../../puntos/entity/Puntos.entity";


@Entity({
    name : 'Miembro'
})
export default class MiembroEntity
{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    documento: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    edad: string;

    @Column()
    telefono: string;

    @Column()
    permiso: string;

    @Column()
    direccion: string;

    @OneToMany(() => CursoEntity, (curso) => curso.miembro)
    cursos: CursoEntity[];

    @ManyToOne(() => PuntosEntity, (puntos) => puntos.miembro)
    puntos: PuntosEntity
};