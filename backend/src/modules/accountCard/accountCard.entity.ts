import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
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

  
  @ManyToOne(() => AccountUserEntity, accountUser => accountUser.accountCard)
  accountUser: AccountUserEntity;

}
