import { BeforeInsert, Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class Card_AmountEntity extends BaseEntityApp {

@Column("float",{default:0})
amount:number

}