import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import UserEntity from "./User.entity";

@Entity({
    name : 'users_details'
})
export default class UserDetailEntity
{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    edad: number;

    @Column()
    mobile: string;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;

};