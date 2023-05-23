import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class AssociateCardsEntity extends BaseEntityApp {
  @Column({ unique: true })
  cardNumber: string;

  @Column()
  expiration: Date;

  @Column("timestamp", { nullable: true })
  emission: Date;

  @Column({ length: 3 })
  cvv: string;

  @Column()
  emisor: string;

  @Column()
  bank: string;

  @ManyToMany(() => AccountUserEntity, (accountUser) => accountUser.associateCards)
  accountUser: AccountUserEntity[];
}
