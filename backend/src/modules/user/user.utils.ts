import { EntityManager } from "typeorm";
import { nodeMailerManager } from "../../config/nodemailer";
import { AppDataSource } from "../../config/postgreSql";
import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";
import { AccountCardEntity } from "../accountCard/accountCard.entity";
import { cardUtils } from "../accountCard/accountCard.utils";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { accountUserUtils } from "../accountUser/accountUser.utils";
import { currencyServices } from "../currency/currency.services";
import { UserEntity } from "./user.entity";
import { hashPassword } from "../../shared/utils/hashPassword.utils";

export interface UserData {
  user: UserEntity;
  accountAmount: AccountAmountEntity;
  accountCard: AccountCardEntity;
  accountUser: AccountUserEntity;
}
class AccountUserHandler {

  async createUserTransaction(body: UserEntity) {
    try {
      const result = await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const user = await this.createUser(body, transactionalEntityManager);
        
        if (!user) throw new Error("user is null");

        // TODO: verificar opciones de transporte
        // await nodeMailerManager.sendVerifyEmail(user.email);

        const accountUser = await this.createAccountUser(user, transactionalEntityManager);

        if (!accountUser) throw new Error("accountUser is null");

        const accountAmount = await this.createAccountAmount(accountUser, transactionalEntityManager);
        const accountCard = await this.createAccountCard(accountUser, transactionalEntityManager);

        if (!accountAmount || !accountCard) throw new Error("accountAmount or accountCard is null");

        return {
          user,
          accountAmount,
          accountCard,
          accountUser
        };
      });
      return result as UserData;
    } catch (error) {
      const e = error as Error;
      throw new Error(e.message);
    }
  }

  async createUser(body: UserEntity, transactionalEntityManager: EntityManager) {
    const userRepository = transactionalEntityManager.getRepository(UserEntity);
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

    const result = await userRepository.save(newUser);
    return result;
  }

  async createAccountUser(user: UserEntity, transactionalEntityManager: EntityManager) {
    const accountRepository = transactionalEntityManager.getRepository(AccountUserEntity);
    const accountUser = new AccountUserEntity();
    accountUser.user = user;
    accountUser.alias = accountUserUtils.generateAlias(user.fullName, user.lastName, user.dni);
    accountUser.typeCount = "CA";
    accountUser.accountNumber = accountUserUtils.generateAccountNumber();
    const result = await accountRepository.save(accountUser);
    return result;
  }

  async createAccountAmount(accountUser: AccountUserEntity, transactionalEntityManager: EntityManager) {
    const amountRepository = transactionalEntityManager.getRepository(AccountAmountEntity);
    const accountAmount = new AccountAmountEntity();
    accountAmount.accountUser = accountUser;
    accountAmount.amount = 0;

    const currency = await currencyServices.getServicesById(1);
    if (!currency) throw new Error("currency is null");
    accountAmount.currency = currency;

    const result = await amountRepository.save(accountAmount);
    return result;
  }

  async createAccountCard(accountUser: AccountUserEntity, transactionalEntityManager: EntityManager) {
    const cardRepository = transactionalEntityManager.getRepository(AccountCardEntity);
    const accountCard = new AccountCardEntity();
    accountCard.cardNumber = cardUtils.generateCardNumber();
    accountCard.expiration = cardUtils.generateCardExpiration();
    accountCard.emission = new Date();
    accountCard.cvv = cardUtils.generateCardCvv();
    accountCard.accountUser = accountUser;
    const result = await cardRepository.save(accountCard);
    return result;
  }
}

export const accountUserHandler = new AccountUserHandler();