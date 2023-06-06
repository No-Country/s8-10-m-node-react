import { FindOptionsWhere } from "typeorm";
import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "../user/user.entity";
import { RecoveryPasswordEntity } from "./recoveryPassword.entity";
import { nodeMailerManager } from "../../config/nodemailer";

export class RecoveryPasswordService extends BaseServices<RecoveryPasswordEntity> {
    constructor() {
        super(RecoveryPasswordEntity);
    }

    async verifyEmail(email:string){
      const userRepository=await this.getRepository(UserEntity)
      await userRepository.update({email},{isVerify:true})
      return {message:"user aunthenticade"}
    }
    
    async recoveryPasswordServices(email:string){
    const userRepository=await this.getRepository(UserEntity)
    const user=await userRepository.findOne({where:{email}})
    if(!user)throw new Error("this user not exist")
    const token = Math.random().toString(20).substring(2, 12);  
    await userRepository.update({email},{password:token})
    await nodeMailerManager.recoveryPasswordEmail(email,user.fullName,token)
    return {message:"check your email with you new password"}
    }
}