import { BaseServices } from "../../shared/services/baseServices";
import { BusinessEntity, Status, Transaction } from "./business.entity";

export class BusinessService extends BaseServices<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
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
}
