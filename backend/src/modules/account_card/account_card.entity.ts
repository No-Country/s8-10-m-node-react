import { BeforeInsert, Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class Card_AccountEntity extends BaseEntityApp {

@Column()
number_card:string

@Column()
vc:string

@Column('timestamp', { nullable: true })
emision:Date

@BeforeInsert()
dateEmision(){
this.emision=new Date(Date.now())
}

}