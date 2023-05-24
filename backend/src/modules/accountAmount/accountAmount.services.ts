import { BaseServices } from "../../shared/services/baseServices";
import { AccountAmountEntity } from "./accountAmount.entity";


export class AccountAmountService extends BaseServices<AccountAmountEntity> {
  constructor() {
    super(AccountAmountEntity);
  }
}

export const accountAmountServices = new AccountAmountService();