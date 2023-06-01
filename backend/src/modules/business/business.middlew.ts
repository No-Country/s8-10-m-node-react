import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { BusinessEntity, Transaction } from "./business.entity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

export class BusinessMiddlewares extends BaseMiddlewares<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }

  async checkTransactionType(req: Request, res: Response, next: NextFunction) {
    const { typeTransaction } = req.body;

    try {
      const type = Object.values(Transaction).includes(typeTransaction);
      if (!type) return res.status(400).json({ msg: "Type transaction not found" });

      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async checkAccountUser(req: Request, res: Response, next: NextFunction) {
    const { emitter, addressee } = req.body;

    try {
      const userEmitter = await (await this.getRepository(AccountUserEntity)).findOne({ where: { accountNumber: emitter } });
      const userAddressee = await (await this.getRepository(AccountUserEntity)).findOne({ where: { accountNumber: addressee } });
      if (!userEmitter){
        const userEmitterCard = await (await this.getRepository(AccountUserEntity)).findOne( {where: { accountCard: { cardNumber: emitter } }});
        if(!userEmitterCard) return res.status(400).json({ msg: "User emitter not found" });
      }
      if (!userAddressee)return res.status(400).json({ msg: "User addressee not found" });
      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
