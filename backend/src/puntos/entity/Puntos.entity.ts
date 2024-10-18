import MiembroEntity from "src/miembro/entity/Miembro.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'puntos'
})
export default class PuntosEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    totales: number;

    @OneToOne(() => MiembroEntity, (miembro ) => miembro.puntos)
    miembro: MiembroEntity;

};