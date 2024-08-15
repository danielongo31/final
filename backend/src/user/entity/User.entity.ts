import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: 'user'
})
export default class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    correo: string;

    @Column()
    password: string;
}