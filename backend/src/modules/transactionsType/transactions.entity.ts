import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class transactionsType extends BaseEntityApp {

    @Column()
    name: string;

    // Relations
};
