import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ActividadesEntity from "src/actividades/entity/Actividades.entity";
import MiembroEntity from "../../miembro/entity/Miembro.entity";

@Entity({
    name : 'Curso'
})
export default class CursoEntity
{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    documento: string;

    @Column()
    nombre: string;

    @ManyToOne(() => MiembroEntity, (miembro) => miembro.cursos)
    miembro: MiembroEntity;

    @ManyToOne(() => ActividadesEntity, (actividades) => actividades.cursos)
    actividades: ActividadesEntity;
    
};