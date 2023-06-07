import { ArrayBusiness, generalDto } from "../../shared/dto/generalDto";
import { BaseServices } from "../../shared/services/baseServices";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { accountUserServices } from "../accountUser/accountUser.services";
import { BusinessEntity, Status, Transaction } from "./business.entity";

export class BusinessService extends BaseServices<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }

  async getBusinessType(termStatus: Status, termTransaction: Transaction): Promise<BusinessEntity[] | null> {
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
  }

  async getBusinessByUser(accountNumber: string): Promise<ArrayBusiness[] | null> {
    const user = await (await accountUserServices.getRepository(AccountUserEntity)).findOne({ where: { accountNumber } });
    if (!user) throw new Error("User not found");
    
    const query = await this.repository.createQueryBuilder("business")
    .where("business.senderId = :accountNumber OR business.receiverId = :accountNumber", { accountNumber })
    .getMany();
    const business = generalDto.businessFilter(query);
    return business;
  }
}
