import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class UserEntity extends BaseEntityApp {

  @Column()
  userId: string;
  
  @Column()
  isVerify: boolean;
  
  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  dni: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  // Relations

  @OneToMany(() => AccountUserEntity, account => account.user)
  account: AccountUserEntity[];

}