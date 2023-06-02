import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AssociateCardsEntity } from "./associateCards.entity";

export class AssociateCardsMiddlewares extends BaseMiddlewares<AssociateCardsEntity> {
  constructor() {
    super(AssociateCardsEntity);
  }

  async checkDataCards(req: Request, res: Response, nex: NextFunction) {
    const { cardNumber, cvv, issuingEntity, type, cardholder, accountNumber } = req.body;
    try {
      if (!cardNumber || !cvv || !issuingEntity || !type || !cardholder || !accountNumber) {
        return res.status(400).json({ status: "error", error: "Data not complete" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
