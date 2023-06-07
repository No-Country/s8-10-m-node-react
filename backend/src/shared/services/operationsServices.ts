import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../../config/postgreSql";
import { AccountAmountEntity } from "../../modules/accountAmount/accountAmount.entity";
import { AccountUserEntity } from "../../modules/accountUser/accountUser.entity";
import { BusinessDto } from "../../modules/business/business.dto";
import { PayServices, Status, Transaction } from "../../modules/business/business.entity";

class OperationsServices {
  async addMoney(amountQuantity: number, account: string) {
    const accountUser = await this.getAccount(account);
    const id = accountUser?.accountAmount[0].id;
    const accountAmount = await AppDataSource.getRepository(AccountAmountEntity).findOne({
      where: {
        id,
      } as unknown as FindOptionsWhere<AccountAmountEntity>,
    });

    await AppDataSource.getRepository(AccountAmountEntity).update(
      { accountUser: accountUser } as unknown as FindOptionsWhere<AccountAmountEntity>,
      { amount: (accountAmount?.amount as number) + amountQuantity }
    );
  }

  async removeMoney(amountQuantity: number, account: string) {
    const accountUser = await this.getAccount(account);
    const id = accountUser?.accountAmount[0].id;
    const accountAmount = await AppDataSource.getRepository(AccountAmountEntity).findOne({
      where: {
        id,
      } as unknown as FindOptionsWhere<AccountAmountEntity>,
    });

    if ((accountAmount?.amount as number) < amountQuantity) throw new Error("Insufficient funds");

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
      where: { accountCard: { cardNumber: card } },
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return accountUser!.accountNumber;
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
    const accountNumber = await this.getAccountByCard(emitter);
    await this.removeMoney(amountQuantity, accountNumber);
  }

  async operationDeposit(addressee: string, amountQuantity: number) {
    await this.addMoney(amountQuantity, addressee);
  }

  async operationManager(
    typeTransaction: Transaction,
    emitter: string,
    addressee: string,
    amountQuantity: number,
    subject: string
  ) {
    switch (typeTransaction) {
      case Transaction.TRANSFER:
        await this.operationTransfer(emitter, addressee, amountQuantity);
        return this.transferResponse(amountQuantity, emitter, addressee, subject);

      case Transaction.EXTRACTION:
        await this.operationExtraction(emitter, amountQuantity);
        return this.extractionResponse(amountQuantity, emitter, subject);

      case Transaction.PAY:
        await this.operationPayment(emitter, amountQuantity);
        return this.paymentResponse(amountQuantity, emitter, PayServices.NETFLIX, subject);

      case Transaction.CARD:
        await this.operationPayCard(emitter, amountQuantity);
        return this.paymentResponse(amountQuantity, emitter, PayServices.NETFLIX, subject);

      case Transaction.DEPOSIT:
        await this.operationDeposit(emitter, amountQuantity);
        return this.despositResponse(amountQuantity, emitter, subject);
      default:
        throw new Error("Transaction type not found");
    }
  }

  transferResponse(amount: number, emitter: string, addressee: string, subject: string) {
    const response = new BusinessDto(emitter, addressee, 1, amount, Status.APPROVED, Transaction.TRANSFER, subject);
    return response;
  }

  extractionResponse(amount: number, emitter: string, subject: string) {
    const response = new BusinessDto(emitter, "ATM", 1, amount, Status.APPROVED, Transaction.EXTRACTION, subject);
    return response;
  }

  paymentResponse(amount: number, emitter: string, payService: PayServices, subject: string) {
    const response = new BusinessDto(emitter, payService, 1, amount, Status.APPROVED, Transaction.PAY, subject);
    return response;
  }

  despositResponse(amount: number, addressee: string, subject: string) {
    const response = new BusinessDto("Domino", addressee, 1, amount, Status.APPROVED, Transaction.DEPOSIT, subject);
    return response;
  }
}

export const operationsServices = new OperationsServices();
