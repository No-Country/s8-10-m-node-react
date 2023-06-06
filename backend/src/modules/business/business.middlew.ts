import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { BusinessEntity, Transaction } from "./business.entity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { httpError } from "../../shared/utils/httpError.utils";

export class BusinessMiddlewares extends BaseMiddlewares<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }

  async checkTransactionType(req: Request, res: Response, next: NextFunction) {
    const { typeTransaction } = req.body;

    try {
      const type = Object.values(Transaction).includes(typeTransaction);
      if (!type) return httpError.response(res, 404, "Transaction type not found");

      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }

  async checkAccountUser(req: Request, res: Response, next: NextFunction) {
    const { emitter, addressee } = req.body;

    try {
      const userEmitter = await (await this.getRepository(AccountUserEntity)).findOne({ where: { accountNumber: emitter } });
      const userAddressee = await (await this.getRepository(AccountUserEntity)).findOne({ where: { accountNumber: addressee } });
      if (!userEmitter) {
        const userEmitterCard = await (await this.getRepository(AccountUserEntity)).findOne({ where: { accountCard: { cardNumber: emitter } } });
        if (!userEmitterCard) return httpError.response(res, 404, "Emitter user not found");
      }
      if (!userAddressee) return httpError.response(res, 404, "Addressee user not found");
      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
