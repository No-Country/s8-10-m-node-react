import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()

export class RecoveryPasswordEntity extends BaseEntityApp {

    @Column()
    email: string;

    @Column()
    token: string;
    
}