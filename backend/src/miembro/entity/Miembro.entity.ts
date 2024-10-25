import CursoEntity from "src/curso/entity/Curso.entity";
import PuntosEntity from "src/puntos/entity/Puntos.entity";
import RolEntity from "src/rol/entity/Rol.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";

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

    @ManyToOne(() => CursoEntity, (curso) => curso.miembros)
    curso: CursoEntity;

    @ManyToOne(() => RolEntity, (rol) => rol.miembros, {
        eager: true
    })
    rol: RolEntity;

    @OneToOne(() => PuntosEntity, {
        cascade: true,
    })
    @JoinColumn()
    puntos: PuntosEntity;

    @RelationId((miembro: MiembroEntity) => miembro.puntos)
    puntosid: number;



}