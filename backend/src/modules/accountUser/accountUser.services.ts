import { BaseServices } from "../../shared/services/baseServices";
import { AccountUserEntity } from "./accountUser.entity";

export class AccountUserServices extends BaseServices<AccountUserEntity> {
  constructor() {
    super(AccountUserEntity);
  }

  async getAccountUserByAccountNumber(accountNumber: string) {
    const account = await this.repository.findOne({ where: { accountNumber } });
    if(!account) throw new Error("Account not found");
    return account;
  }
}


export const accountUserServices = new AccountUserServices();