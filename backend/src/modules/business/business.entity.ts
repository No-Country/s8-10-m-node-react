import { Entity, Column, ManyToOne, OneToMany, JoinTable } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { CurrencyEntity } from "../currency/currency.entity";

export enum Status {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum Transaction {
  PAY = "PAY",
  DEPOSIT = "DEPOSIT",
  EXTRACTION = "EXTRACTION",
  TRANSFER = "TRANSFER",
}

@Entity()
export class BusinessEntity extends BaseEntityApp {

  @Column()
  senderId: string;

  @Column()
  receiverId: string;

  @Column()
  currencyId: number;

  @Column({ type: "money"})
  amount: number;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @Column({
    type: "enum",
    enum: Transaction,
  })
  transaction: Transaction;

  @Column("text")
  subject:string;

  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.business)
  accountUser: AccountUserEntity;

  @OneToMany(() => CurrencyEntity, (currency) => currency.business)
  currency: CurrencyEntity[];

}
