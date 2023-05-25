import { BaseServices } from "../../shared/services/baseServices";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { BusinessEntity, Status, Transaction } from "./business.entity";
import {BusinessDto} from "./business.dto"

export class BusinessService extends BaseServices<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }

  async postServiceTransfer(data: BusinessDto,address:string):Promise<BusinessEntity|null>{
    const {accountNumber}=data
    const AccountRepository=await this.getRepository(AccountUserEntity)
    const regexNumber=/^\d$/
    let accountReceptor:any
    if(regexNumber.test(address)){
      accountReceptor=await AccountRepository.findOne({where:{accountNumber:address},relations:{user:true}})
      }else{
      accountReceptor=await AccountRepository.findOne({where:{alias:address},relations:{user:true}})
    }
    if(!accountReceptor) throw new Error("this accountReceptor not exist")

    const accountEmisor=await AccountRepository.findOne({where:{accountNumber},relations:{user:true}})
    if(!accountEmisor) throw new Error("this account not exist")

    delete data.accountNumber
    const business={
     ...data,
     transaction:Transaction.TRANSFER,
     senderId:accountEmisor?.user.userId,
     receiverId:accountReceptor?.user.userId,
     accountUser:accountEmisor
    }
   return await this.repository.save(business)
}

  async getBusinessType(termStatus:Status,termTransaction:Transaction):Promise<BusinessEntity[]|null>{
    try {
      if(termStatus && termTransaction){
        return await this.repository.find({where:{status:termStatus,transaction:termTransaction}})
       }
      if(termStatus){
       return await this.repository.find({where:{status:termStatus}})
      }
      if(termTransaction){
       return await this.repository.find({where:{transaction:termTransaction}})
      }
      return await this.repository.find()
    } catch (error) {
      throw new Error("bad request")
    }
  }

}