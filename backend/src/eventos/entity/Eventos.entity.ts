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
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

}