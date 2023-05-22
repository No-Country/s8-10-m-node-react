import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class AccountCardEntity extends BaseEntityApp {
  @Column()
  numberCard: string;

  @Column()
  expiration: Date;

  @Column("timestamp", { nullable: true })
  emission: Date;

  @Column({length: 3})
  cvv: string;

  @ManyToOne(() => AccountUserEntity, (accountUser) => accountUser.accountCard)
  accountUser: AccountUserEntity;
}
