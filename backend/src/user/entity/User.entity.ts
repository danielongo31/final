import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name : 'users'
})
export default class UserEntity
{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    dni: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;
    
};