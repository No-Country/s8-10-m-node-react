import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";
import { httpError } from "../../shared/utils/httpError.utils";

export class FavoriteContactMiddleware extends BaseMiddlewares<FavoriteContactsEntity> {
  constructor() {
    super(FavoriteContactsEntity);
  }

  async checkData(req: Request, res: Response, next: NextFunction) {
    const { nickname, data } = req.body;
    try {
      if (!nickname) return httpError.response(res, 400, "Nickname is required");
      const existsNickname = await this.repository.findOne({ where: { nickname } });
      if (existsNickname) return httpError.response(res, 400, "The nickname already exists");
      if (!data) return httpError.response(res, 400, "Alias or account number is required");
      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
  async checkNickName(req: Request, res: Response, next: NextFunction) {
    const { nickname } = req.body;
    try {
      if (!nickname) return httpError.response(res, 400, "Nickname is required");

      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
