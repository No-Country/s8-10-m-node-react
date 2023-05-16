import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { BusinessEntity } from "../business/business.entity";

@Entity()
export class CurrencyEntity extends BaseEntityApp {
  
  @Column()
  name: string;

  @Column()
  acronym: string;

  // Relations

  @ManyToOne(() => BusinessEntity, business => business.currency)
  business: BusinessEntity;

}