import { BaseServices } from "../../shared/services/baseServices";
import { AccountUserEntity } from "./accountUser.entity";

export class AccountUserServices extends BaseServices<AccountUserEntity> {
  constructor() {
    super(AccountUserEntity);
  }
}

export const accountUserServices = new AccountUserServices();