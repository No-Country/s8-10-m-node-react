import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { CurrencyEntity } from "../currency/currency.entity";

@Entity()
export class AccountAmountEntity extends BaseEntityApp {

  @Column({ type: "real", default: 0 })
  amount: number;

  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.accountAmount)
  accountUser: AccountUserEntity;

  @ManyToOne(() => CurrencyEntity, (currency) => currency.accountAmount)
  currency: CurrencyEntity;

}
