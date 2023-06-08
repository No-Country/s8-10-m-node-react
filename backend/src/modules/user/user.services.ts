import { BaseServices } from "../../shared/services/baseServices";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { UserEntity } from "./user.entity";

export class UserService extends BaseServices<UserEntity> {
  constructor() {
    super(UserEntity);
  }
  async getUserByaliasOremail(term:string){
    const AccountRepo=await this.getRepository(AccountUserEntity)
    try {
      if(term.includes("@")){
      const result = await this.repository.findOne({ where: { email:term } }) as UserEntity;
      return result
    }else{
      const result = await this.repository.findOne({where:{account:{alias:term}}}) as UserEntity
      return result
    }
    } catch (error:any) {
      return null
    }

  }
}

export const userServices = new UserService();