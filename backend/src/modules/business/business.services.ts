import { BaseServices } from "../../shared/services/baseServices";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { BusinessEntity, Status, Transaction } from "./business.entity";
import { BusinessDto } from "./business.dto";
import { UserEntity } from "../user/user.entity";
import { FindOptionsWhere } from "typeorm";
import { AccountAmountEntity } from "../accountAmount/accountAmount.entity";

export class BusinessService extends BaseServices<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }

  async postServiceTransfer(data: BusinessDto, address: string): Promise<BusinessEntity | null> {
    //TODO Pasar a un helper
    const { accountNumber } = data;
    const AccountRepository = await this.getRepository(AccountUserEntity);
    const regexNumber = /^\d+/;
    let accountReceptor: any;
    if (regexNumber.test(address)) {
      accountReceptor = await AccountRepository.findOne({
        where: { accountNumber: address },
        relations: { user: true },
      });
    } else {
      accountReceptor = await AccountRepository.findOne({
        where: { alias: address },
        relations: { user: true },
      });
    }
    if (!accountReceptor) throw new Error("this accountReceptor not exist");

    const accountEmisor = await AccountRepository.findOne({
      where: { accountNumber },
      relations: { user: true },
    });
    if (!accountEmisor) throw new Error("this account not exist");

    delete data.accountNumber;
    const business = {
      ...data,
      transaction: Transaction.TRANSFER,
      //? Cambiar respuesta a número de cuenta.
      senderId: accountEmisor?.user.userId,
      receiverId: accountReceptor?.user.userId,
      accountUser: accountEmisor,
    };
    return await this.repository.save(business);
  }

  async getBusinessType(
    termStatus: Status,
    termTransaction: Transaction
  ): Promise<BusinessEntity[] | null> {
    try {
      if (termStatus && termTransaction) {
        return await this.repository.find({
          where: { status: termStatus, transaction: termTransaction },
        });
      }
      if (termStatus) {
        return await this.repository.find({ where: { status: termStatus } });
      }
      if (termTransaction) {
        return await this.repository.find({ where: { transaction: termTransaction } });
      }
      return await this.repository.find();
    } catch (error) {
      throw new Error("bad request");
    }
  }

  async postServiceDeposit(data: any, address: string): Promise<AccountAmountEntity | null> {
    try {
      const AccountUserRepository = await this.getRepository(AccountUserEntity);
      const AccountAmountRepository = await this.getRepository(AccountAmountEntity);
      const regexNumber = /^\d$/;
      //nota esto da error, lo coloque para que solo acepte numeros el regex pero me estaba fallando si lo pueden arreglar ustedes fino :3 if(!regexNumber.test(address)) throw new Error("this is a not accountNumber")
      const AccountReceptor = await AccountUserRepository.findOne({
        where: { accountNumber: address },
      });
      if (!AccountReceptor) throw new Error("this accountUser not exist");
      const AccountAmount = await AccountAmountRepository.findOne({
        where: { accountUser: { id: AccountReceptor.id } },
      });
      if (!AccountAmount) throw new Error("this amount not exist");
      const finishDeposit = await AccountAmountRepository.preload({
        id: AccountAmount.id,
        ...data,
      });
      if (!finishDeposit) throw new Error("deposit failed try later");
      await AccountAmountRepository.save(finishDeposit);
      return finishDeposit;
    } catch (error) {
      throw new Error("bad request");
    }
  }

  async addMoney(amountMas: number, addressee: string) {
    const accountUser = await (await this.getRepository(AccountUserEntity)).findOneBy({accountNumber: addressee});
    const accountAmount = await (await this.getRepository(AccountAmountEntity)).findOneBy(accountUser as unknown as FindOptionsWhere<AccountAmountEntity>);
    await (await this.getRepository(AccountAmountEntity)).update(accountUser as unknown as FindOptionsWhere<AccountAmountEntity>, {amount: accountAmount?.amount as number + amountMas});
    
  }

  async removeMoney(amountMas: number, addressee: string) {
    const accountUser = await (await this.getRepository(AccountUserEntity)).findOneBy({accountNumber: addressee});
    const accountAmount = await (await this.getRepository(AccountAmountEntity)).findOneBy(accountUser as unknown as FindOptionsWhere<AccountAmountEntity>);
    await (await this.getRepository(AccountAmountEntity)).update(accountUser as unknown as FindOptionsWhere<AccountAmountEntity>, {amount: accountAmount?.amount as number - amountMas});
  }
}
