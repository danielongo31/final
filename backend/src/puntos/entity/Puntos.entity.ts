import MiembroEntity from "src/miembro/entity/Miembro.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'puntos'
})
export default class PuntosEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cantidad: number;

    @Column()
    tipo: string;

    @ManyToOne(() => MiembroEntity, (miembro) => miembro.puntos)
    miembro: MiembroEntity;

};