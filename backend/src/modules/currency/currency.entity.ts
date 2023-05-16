import { Entity, Column } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class Currency extends BaseEntityApp {
  
  @Column()
  name: string;

  @Column()
  acronym: string;

  // Relations

}