import { Entity, Column } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

export enum Status {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

@Entity()
export class BusinessEntity extends BaseEntityApp {

  @Column()
  sender_id: string;

  @Column()
  receiver_id: string;

  @Column()
  currency_id: string
  
  @Column()
  type_tras_id: string
  
  @Column()
  date: Date;

  @Column()
  amount: number;

  @Column({ 
    type: "enum", 
    enum: Status,
    default: Status.PENDING 
  })
  status: Status;

  // Relations
    // sender_id
    // receiver_id
    // currency_id
    // type_tras_id

}