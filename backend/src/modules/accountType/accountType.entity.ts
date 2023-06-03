import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class AccountTypeEntity extends BaseEntityApp {
  
  @Column()
  name: string;

  
  @OneToOne(() => AccountUserEntity, accountUser => accountUser.accountType)
  accountUser: AccountUserEntity;

}
