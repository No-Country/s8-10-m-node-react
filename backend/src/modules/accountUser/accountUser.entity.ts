import {
  Column,
  Entity,
  ManyToOne,
  OneToMany
} from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";
import { AccountCardEntity } from "../accountCard/accountCard.entity";
import { AssociateCardsEntity } from "../associateCards/associateCards.entity";
import { BusinessEntity } from "../business/business.entity";
import { UserEntity } from "../user/user.entity";

@Entity()
export class AccountUserEntity extends BaseEntityApp {


  @Column({ length: 100, unique: true })
  alias: string;

  @Column({default: "CA"})
  typeCount: string;

  @Column()
  accountNumber: string;

  @ManyToOne(() => UserEntity, (user) => user.account)
  user: UserEntity;

  @OneToMany(() => BusinessEntity, (business) => business.accountUser)
  business: BusinessEntity[];

  @OneToMany(() => AccountCardEntity, (accountCard) => accountCard.accountUser)
  accountCard: AccountCardEntity[];

  @OneToMany(() => AccountAmountEntity, (accountAmount) => accountAmount.accountUser)
  accountAmount: AccountAmountEntity[];

  @OneToMany(() => AssociateCardsEntity, (associateCards) => associateCards.accountUser)
  associateCards: AccountAmountEntity[];
}
