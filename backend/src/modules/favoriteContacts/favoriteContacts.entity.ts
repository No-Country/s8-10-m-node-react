import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { UserEntity } from "../user/user.entity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

@Entity()
export class FavoriteContactsEntity extends BaseEntityApp {
  @Column("text")
  nickname: string;

  @ManyToOne(() => UserEntity, (user) => user.favoriteContacts)
  user: UserEntity;

  @ManyToOne(() => AccountUserEntity, (account) => account.favoriteContacts, { eager: true})
  accountUser: AccountUserEntity;
}
