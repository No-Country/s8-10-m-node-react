import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class AccountCardEntity extends BaseEntityApp {
  @Column({ unique: true })
  cardNumber: string;

  @Column()
  expiration: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column("timestamp", { nullable: true })
  emission: Date;

  @Column({ length: 3 })
  cvv: string;

  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.accountCard)
  accountUser: AccountUserEntity;
}
