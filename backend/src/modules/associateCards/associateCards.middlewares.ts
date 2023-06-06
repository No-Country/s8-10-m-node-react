import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AssociateCardsEntity } from "./associateCards.entity";
import { httpError } from "../../shared/utils/httpError.utils";

export class AssociateCardsMiddlewares extends BaseMiddlewares<AssociateCardsEntity> {
  constructor() {
    super(AssociateCardsEntity);
  }

  async checkDataCards(req: Request, res: Response, nex: NextFunction) {
    const { cardNumber, cvv, issuingEntity, type, cardholder } = req.body;
    try {
      if (!cardNumber || !cvv || !issuingEntity || !type || !cardholder) {
        return httpError.response(res, 400, "Incomplete data");
      }
      nex();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
  async checkCardNumber(req: Request, res: Response, nex: NextFunction) {
    const { cardNumber } = req.body;
    try {
      if (!cardNumber) {
        return httpError.response(res, 400, "Card number required");
      }
      nex();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
