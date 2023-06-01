import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
enum cardType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}
@Entity()
export class AssociateCardsEntity extends BaseEntityApp {
  
  @Column({ type: "enum", enum: cardType, default: cardType.DEBIT })
  type: cardType;

  @Column({ unique: true })
  cardNumber: string;

  @Column()
  cardholder: string;

  @Column({ length: 3 })
  cvv: string;

  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.associateCards)
  accountUser: AccountUserEntity;
}
