import { AppDataSource } from "../../db/postgreSql";
import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";
import { accountAmountServices } from "../accountAmount/accountAmount.services";
import { AccountCardEntity } from "../accountCard/accountCard.entity";
import { accountCardServices } from "../accountCard/accountCard.services";
import { cardUtils } from "../accountCard/accountCard.utils";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { accountUserServices } from "../accountUser/accountUser.services";
import { accountUserUtils } from "../accountUser/accountUser.utils";
import { currencyServices } from "../currency/currency.services";
import { UserEntity } from "../user/user.entity";
import { userServices } from "./user.services";
import { hashPassword } from "./utils/hashPassword.utils";

class AccountUserHandler {
  constructor() {

  }

  async createUserTransaction(body: UserEntity) {
    try {
      const result = await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const userRepository = transactionalEntityManager.getRepository(UserEntity);
        const accountRepository = transactionalEntityManager.getRepository(AccountUserEntity);
        const cardRepository = transactionalEntityManager.getRepository(AccountCardEntity);
        const amountRepository = transactionalEntityManager.getRepository(AccountAmountEntity);

        // Create user object
        const { fullName, lastName, password, email, phone, address, dni, country, postalCode } = body;
        const newUser = new UserEntity();
        newUser.fullName = fullName;
        newUser.lastName = lastName;
        newUser.address = address;
        newUser.country = country;
        newUser.dni = dni;
        newUser.email = email;
        newUser.phone = phone;
        newUser.postalCode = postalCode;
        newUser.password = await hashPassword.hashPassword(password);
        const user = await userRepository.save(newUser);

        // Create accountUser
        if(!user) throw new Error("Error: user is null");
        const newAccountUser = new AccountUserEntity();
        newAccountUser.user = user;
        newAccountUser.alias = accountUserUtils.generateAlias(user.fullName, user.lastName, user.dni)
        newAccountUser.typeCount = "CA";
        newAccountUser.accountNumber = accountUserUtils.generateAccountNumber();
        const accountUser = await accountRepository.save(newAccountUser);

        // Create accountAmount
        if(!accountUser) throw new Error("Error: accountUser is null");
        const newAccountAmount = new AccountAmountEntity();
        newAccountAmount.accountUser = accountUser;
        newAccountAmount.amount = 0;
        const currency = await currencyServices.getServicesById(1);
        if (!currency) throw new Error("Error: currency is null");
        newAccountAmount.currency = currency;
        const accountAmount = await amountRepository.save(newAccountAmount);

        // Create accountCard
        const newAccountCard = new AccountCardEntity();
        newAccountCard.cardNumber = cardUtils.generateCardNumber();
        newAccountCard.expiration = cardUtils.generateCardExpiration();
        newAccountCard.emission = new Date();
        newAccountCard.cvv = cardUtils.generateCardCvv();
        newAccountCard.accountUser = accountUser;
        const accountCard = await cardRepository.save(newAccountCard);

        return {
          user,
          accountAmount,
          accountCard,
          accountUser
        }
      })
      return result;
  } catch (error) {
    console.log(error);
  }
  }

  async createUser(body: UserEntity) {
    const { fullName, lastName, password, email, phone, address, dni, country, postalCode } = body;
    
    const newUser = new UserEntity();
    newUser.fullName = fullName;
    newUser.lastName = lastName;
    newUser.address = address;
    newUser.country = country;
    newUser.dni = dni;
    newUser.email = email;
    newUser.phone = phone;
    newUser.postalCode = postalCode;
    newUser.password = await hashPassword.hashPassword(password);


    return newUser;
  }

  async createAccountUser(user: UserEntity) {
    const accountUser = new AccountUserEntity();
    accountUser.user = user;
    accountUser.alias = accountUserUtils.generateAlias(user.fullName, user.lastName, user.dni)
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
    if (!currency) throw new Error("Error: currency is null");
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