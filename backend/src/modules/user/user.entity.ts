import { Column, Entity } from "typeorm";
import { BaseEntityApp } from "./shared/entity/baseEntity";

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

}