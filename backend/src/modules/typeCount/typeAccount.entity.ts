import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class typeAccount extends BaseEntityApp {

    @Column()
    name: string;

    // Relations
};