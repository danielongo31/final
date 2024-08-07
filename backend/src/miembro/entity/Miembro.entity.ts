import CursoEntity from "src/curso/entity/Curso.entity";
import PuntosEntity from "src/puntos/entity/Puntos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'miembros'
})
export default class MiembroEntity {

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

    @OneToMany(() => PuntosEntity, (puntos) => puntos.miembro)
    puntos: PuntosEntity[];

    @OneToMany(() => CursoEntity, (curso) => curso.miembro)
    cursos: CursoEntity[];

}