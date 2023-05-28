import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../../db/postgreSql";
import { AccountAmountEntity } from "../../modules/accountAmount/accountAmount.entity";
import { AccountUserEntity } from "../../modules/accountUser/accountUser.entity";
import { Transaction } from "../../modules/business/business.entity";

class OperationsServices {
  async addMoney(amountQuantity: number, addressee: string) {
    const accountUser = await this.getAccount(addressee);
    const accountAmount = await AppDataSource.getRepository(AccountAmountEntity).findOne({
      where: {
        accountUser: accountUser,
      } as unknown as FindOptionsWhere<AccountAmountEntity>
    });

    await AppDataSource.getRepository(AccountAmountEntity).update(
      {accountUser: accountUser} as unknown as FindOptionsWhere<AccountAmountEntity>,
      { amount: (accountAmount?.amount as number) + amountQuantity }
    );
  }

  async removeMoney(amountQuantity: number, addressee: string) {
    const accountUser = await this.getAccount(addressee);
    const accountAmount = await AppDataSource.getRepository(AccountAmountEntity).findOne({
      where: {
        accountUser: accountUser,
      } as unknown as FindOptionsWhere<AccountAmountEntity>
    });

    await AppDataSource.getRepository(AccountAmountEntity).update(
      {accountUser: accountUser} as unknown as FindOptionsWhere<AccountAmountEntity>,
      { amount: (accountAmount?.amount as number) - amountQuantity }
    );
  }

  async getAccount(addressee: string) {
    const accountUser = await AppDataSource.getRepository(AccountUserEntity).findOneBy({
      accountNumber: addressee,
    });
    if (!accountUser) {
      return await AppDataSource.getRepository(AccountUserEntity).findOneBy({ alias: addressee });
    }
    return accountUser;
  }

  async operationTransfer(emitter: string, addressee: string, amountQuantity: number) {
    this.addMoney(amountQuantity, addressee);
    this.removeMoney(amountQuantity, emitter);
  }

  async operationDeposit(addressee: string, amountQuantity: number) {
    this.addMoney(amountQuantity, addressee);
  }

  async operationExtraction(addressee: string, amountQuantity: number) {
    this.removeMoney(amountQuantity, addressee);
  }

  async operationPayment(addressee: string, amountQuantity: number) {
    this.removeMoney(amountQuantity, addressee);
  }

  async operationManager(typeTransaction: Transaction, emitter: string, addressee: string, amountQuantity: number) {
    switch (typeTransaction) {
      case Transaction.TRANSFER:
        this.operationTransfer(emitter, addressee, amountQuantity);
        break;
      case Transaction.EXTRACTION:
        this.operationExtraction(emitter, amountQuantity);
        break;
      case Transaction.PAY:
        this.operationPayment(emitter, amountQuantity);
        break;
      case Transaction.DEPOSIT:
        this.operationDeposit(addressee, amountQuantity);
        break;
      default:
        break;
    }
  }
}

export const operationsServices = new OperationsServices();
