import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

enum cardType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

enum entityCard {
  MASTERCARD = "MASTERCARD",
  VISA = "VISA",
  AMEX = "AMEX",
}
@Entity()
export class AssociateCardsEntity extends BaseEntityApp {
  @Column({ type: "enum", enum: cardType, default: cardType.DEBIT })
  type: cardType;

  @Column({ type: "enum", enum: entityCard, default: entityCard.VISA })
  issuingEntity: entityCard;

  @Column({ unique: true })
  cardNumber: string;

  @Column()
  cardholder: string;

  @Column({ length: 3 })
  cvv: string;

  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.associateCards)
  @JoinColumn()
  accountUser: AccountUserEntity;
}
