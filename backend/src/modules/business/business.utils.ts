import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { accountUserServices } from "../accountUser/accountUser.services";
import { userServices } from "../user/user.services";

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

  async getUserByAccountNumber(accountNumber: string){
    const accountUser = await (await accountUserServices.getRepository(AccountUserEntity)).findOne({ where: { accountNumber } });
    if (!accountUser) throw new Error("User not found");
    const id = accountUser.user.id as number;
    const user = await userServices.getServicesById(id);
    if (!user) throw new Error("User not found");
    return user;
  }
}

export const businessUtils = new BusinessUtils();