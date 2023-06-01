import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../../db/postgreSql";
import { AccountAmountEntity } from "../../modules/accountAmount/accountAmount.entity";
import { AccountUserEntity } from "../../modules/accountUser/accountUser.entity";
import { Transaction } from "../../modules/business/business.entity";

class OperationsServices {
  async addMoney(amountQuantity: number, account: string) {
    const accountUser = await this.getAccount(account);
    const accountAmount = await AppDataSource.getRepository(AccountAmountEntity).findOne({
      where: {
        accountUser: accountUser,
      } as unknown as FindOptionsWhere<AccountAmountEntity>
    });

    await AppDataSource.getRepository(AccountAmountEntity).update(
      { accountUser: accountUser } as unknown as FindOptionsWhere<AccountAmountEntity>,
      { amount: (accountAmount?.amount as number) + amountQuantity }
    );
  }

  async removeMoney(amountQuantity: number, account: string) {
    const accountUser = await this.getAccount(account);
    const accountAmount = await AppDataSource.getRepository(AccountAmountEntity).findOne({
      where: {
        accountUser: accountUser,
      } as unknown as FindOptionsWhere<AccountAmountEntity>
    });

    if (accountAmount?.amount as number < amountQuantity) throw new Error("Insufficient funds");

    await AppDataSource.getRepository(AccountAmountEntity).update(
      { accountUser: accountUser } as unknown as FindOptionsWhere<AccountAmountEntity>,
      { amount: (accountAmount?.amount as number) - amountQuantity }
    );
  }

  async getAccount(account: string) {
    const accountUser = await AppDataSource.getRepository(AccountUserEntity).findOneBy({
      accountNumber: account,
    });

    if (!accountUser) {
      return await AppDataSource.getRepository(AccountUserEntity).findOneBy({ alias: account });
    }
    return accountUser;
  }

  async getAccountByCard(card: string) {
    const accountUser = await AppDataSource.getRepository(AccountUserEntity).findOne({
      where: { accountCard: { cardNumber: card } }
    })
    if (!accountUser) throw new Error("Account not found");
    return accountUser.accountNumber
  }

  async operationTransfer(emitter: string, addressee: string, amountQuantity: number) {
    await this.removeMoney(amountQuantity, emitter);
    await this.addMoney(amountQuantity, addressee);
  }

  async operationExtraction(emitter: string, amountQuantity: number) {
    await this.removeMoney(amountQuantity, emitter);
  }

  async operationPayment(emitter: string, amountQuantity: number) {
    await this.removeMoney(amountQuantity, emitter);
  }

  async operationPayCard(emitter: string, amountQuantity: number) {

    const accountNumber = await this.getAccountByCard(emitter)
    await this.removeMoney(amountQuantity, accountNumber)
  }

  async operationDeposit(addressee: string, amountQuantity: number) {
    await this.addMoney(amountQuantity, addressee);
  }

  async operationManager(typeTransaction: Transaction, emitter: string, addressee: string, amountQuantity: number) {

    switch (typeTransaction) {
      case Transaction.TRANSFER:
        await this.operationTransfer(emitter, addressee, amountQuantity);
        break;
      case Transaction.EXTRACTION:
        await this.operationExtraction(emitter, amountQuantity);
        break;
      case Transaction.PAY:
        await this.operationPayment(emitter, amountQuantity);
        break;
      case Transaction.CARD:
        await this.operationPayCard(emitter, amountQuantity)
        break;
      case Transaction.DEPOSIT:
        await this.operationDeposit(addressee, amountQuantity);
        break;
      default:
        throw new Error("Transaction type not found");
    }
  }


}

export const operationsServices = new OperationsServices();
