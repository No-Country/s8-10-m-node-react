import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "../../shared/entity/baseEntity";

@Entity()
export class UserEntity extends BaseEntityApp {

  @Column()
  userId: string;
  
  @Column()
  isVerify: boolean;
  
  @Column()
  typeCountId: string;

  @Column()
  alias: string;

  @Column()
  numberCount: string;

  // Relations 

}