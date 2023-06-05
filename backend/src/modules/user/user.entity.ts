import { Column, Entity, Generated, OneToMany } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { FavoriteContactsEntity } from "../favoriteContacts/favoriteContacts.entity";

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
  fullName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ default: false })
  isVerify: boolean;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({ unique: true })
  dni: string;

  @Column({nullable: true})
  country: string;

  @Column({nullable: true})
  postalCode: string;

  @OneToMany(() => FavoriteContactsEntity, (favoriteContacts) => favoriteContacts.user, { eager: true})
  favoriteContacts: FavoriteContactsEntity[];

  @OneToMany(() => AccountUserEntity, (account) => account.user, {
    cascade: true,
    eager: true,
  })
  account: AccountUserEntity[];
}
