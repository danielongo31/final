import MiembroEntity from "src/miembro/entity/Miembro.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({
    name: 'Puntos'
})
export default class PuntosEntity
{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cantidad: number;

    @Column()
    tipo: string

    @OneToMany (() => MiembroEntity, (miembro) => miembro.puntos)
    miembro: MiembroEntity[];
    
};