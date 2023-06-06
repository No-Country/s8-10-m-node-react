import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";
import { BusinessEntity } from "../business/business.entity";
@Entity()
export class CurrencyEntity extends BaseEntityApp {

  @Column()
  name: string;

  @Column()
  acronym: string;


  @OneToMany(() => BusinessEntity, business => business.currency)
  business: BusinessEntity;

  @OneToMany(() => AccountAmountEntity, accountAmount => accountAmount.currency)
  accountAmount: AccountAmountEntity[];

}
