import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class typeCount extends BaseEntityApp {

    @Column()
    name: string;

    // Relations
};