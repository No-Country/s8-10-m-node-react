import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";
import { accountAmountServices } from "../accountAmount/accountAmount.services";
import { AccountCardEntity } from "../accountCard/accountCard.entity";
import { accountCardServices } from "../accountCard/accountCard.services";
import { cardUtils } from "../accountCard/accountCard.utils";
import { CurrencyEntity } from "../currency/currency.entity";
import { currencyServices } from "../currency/currency.services";
import { UserEntity } from "../user/user.entity";
import { AccountUserEntity } from "./accountUser.entity";
import { accountUserServices } from "./accountUser.services";
import { accountUserUtils } from "./accountUser.utils";

class AccountUserHandler {
  constructor(){

  }

  async createAccountUser(user: UserEntity) {
    const accountUser = new AccountUserEntity();
    accountUser.user = user;
    accountUser.alias = "asd.asd.pablito"
    accountUser.typeCount = "CA";
    accountUser.accountNumber = accountUserUtils.generateAccountNumber();
    const result = await accountUserServices.postService(accountUser);
    return result;
  }

  async createAccountAmount(accountUser: AccountUserEntity) {
    const accountAmount = new AccountAmountEntity();
    accountAmount.accountUser = accountUser;
    accountAmount.amount = 0;
    
    const currency = await currencyServices.getServicesById(1);
    if(!currency) throw new Error("Error: currency is null");
    accountAmount.currency = currency;

    const result = await accountAmountServices.postService(accountAmount);
    return result;
  }

  async createAccountCard(accountUser: AccountUserEntity) {
    const accountCard = new AccountCardEntity();
    accountCard.cardNumber = cardUtils.generateCardNumber();
    accountCard.expiration = cardUtils.generateCardExpiration();
    accountCard.emission = new Date();
    accountCard.cvv = cardUtils.generateCardCvv();
    accountCard.accountUser = accountUser;
    const result = await accountCardServices.postService(accountCard);
    return result;
  }
}

export const accountUserHandler = new AccountUserHandler();