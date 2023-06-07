import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { accountUserServices } from "../accountUser/accountUser.services";

export class BusinessUtils {
  async getAccountNumber(userData: string){
    let user = await (await accountUserServices.getRepository(AccountUserEntity)).findOne({ where: { accountNumber: userData } });
    if(!user) {
      user = await (await accountUserServices.getRepository(AccountUserEntity)).findOne({ where: { alias: userData } });
      if(!user){
        user = await (await accountUserServices.getRepository(AccountUserEntity)).findOne({ where: { accountCard: { cardNumber: userData } } });
        if (!user) throw new Error("User not found");
      }
    }

    return user.accountNumber;
  }
}

export const businessUtils = new BusinessUtils();