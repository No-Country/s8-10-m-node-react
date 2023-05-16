import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()

export class recoveryPassword extends BaseEntityApp {

    @Column()
    email: string;

    @Column()
    token: string;

    //Relations
};