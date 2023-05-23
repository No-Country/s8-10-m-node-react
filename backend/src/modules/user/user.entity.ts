import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class UserEntity extends BaseEntityApp {
  
  @Column()
  @Generated("uuid")
  userId: string;

  @Column({
    type: "varchar",
    length: 150,
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isVerify: boolean;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  dni: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @OneToMany(() => AccountUserEntity, (account) => account.user)
  account: AccountUserEntity[];
}
