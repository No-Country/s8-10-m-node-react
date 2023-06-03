import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AssociateCardsEntity } from "./associateCards.entity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

export class AssociateCardsMiddlewares extends BaseMiddlewares<AssociateCardsEntity> {
  constructor() {
    super(AssociateCardsEntity);
  }

  async checkDataCards(req: Request, res: Response, nex: NextFunction) {
    const { cardNumber, cvv, issuingEntity, type, cardholder } = req.body;
    try {
      if (!cardNumber || !cvv || !issuingEntity || !type || !cardholder) {
        return res.status(400).json({ status: "error", error: "Data not complete" });
      }
      nex();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
