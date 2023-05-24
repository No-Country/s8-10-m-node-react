import { Column, Entity, ManyToOne, OneToMany, OneToOne, Generated } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";
import { AccountTypeEntity } from "../accountType/accountType.entity";
import { BusinessEntity } from "../business/business.entity";
import { UserEntity } from "../user/user.entity";
import { AccountCardEntity } from "../accountCard/accountCard.entity";
import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";

@Entity()
export class AccountUserEntity extends BaseEntityApp {

  
  @Column()
  @Generated("uuid")
  userId: string;

 
  @Column({ default: false })
  isVerify: boolean;
  
  @Column({ length: 100 ,unique:true})
  alias: string;

  @Column()
  typeCountId: string;

  @Column()
  accountNumber: string;

  
  @ManyToOne(() => UserEntity, user => user.account) 
  user: UserEntity;

  @OneToMany(() => BusinessEntity, business => business.accountUser)
  business: BusinessEntity[];

  @OneToOne(() => AccountTypeEntity, accountType => accountType.accountUser)
  accountType: AccountTypeEntity;
    
  @OneToMany(() => AccountCardEntity, accountCard => accountCard.accountUser)
  accountCard: AccountCardEntity[];
  
  @ManyToOne(() => AccountAmountEntity, accountAmount => accountAmount.accountUser)
  accountAmount: AccountAmountEntity;

}