import { OneToMany, Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { CurrencyEntity } from "../currency/currency.entity";

@Entity()
export class AccountAmountEntity extends BaseEntityApp {
  @Column("float", { default: 0 })
  amount: number;

  @Column()
  currencyId: string;

  @Column()
  accountId: string;

  @OneToMany(() => AccountUserEntity, (accountUser) => accountUser.accountAmount)
  accountUser: AccountUserEntity[];
  @OneToMany(() => CurrencyEntity, (currency) => currency.accountAmount)
  currency: CurrencyEntity[];
}
