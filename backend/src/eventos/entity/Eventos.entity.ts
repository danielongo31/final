import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity({
    name: 'eventos'
})
export default class EventosEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    horaInicio: string;

    @Column()
    horaSalida: string;

    @Column()
    fecha: Date;

}