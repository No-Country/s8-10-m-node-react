import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { CurrencyEntity } from "../currency/currency.entity";

@Entity()
export class AccountAmountEntity extends BaseEntityApp {

  @Column({ type: "money", default: 0 })
  amount: number;

  // @Column()
  // currencyId: string;

  // @Column()
  // accountId: string;

  
  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.accountAmount)
  accountUser: AccountUserEntity;

  @ManyToOne(() => CurrencyEntity, (currency) => currency.accountAmount)
  currency: CurrencyEntity;

}
