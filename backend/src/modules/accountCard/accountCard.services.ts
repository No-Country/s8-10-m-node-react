import { BaseServices } from "../../shared/services/baseServices";
import { AccountCardEntity } from "./accountCard.entity";

export class AccountCardServices extends BaseServices<AccountCardEntity> {
  constructor() {
    super(AccountCardEntity);
  }
}

export const accountCardServices = new AccountCardServices();