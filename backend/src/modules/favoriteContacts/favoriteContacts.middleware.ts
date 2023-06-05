import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";

export class FavoriteContactMiddleware extends BaseMiddlewares<FavoriteContactsEntity> {
  constructor() {
    super(FavoriteContactsEntity);
  }

  async checkData(req: Request, res: Response, nex: NextFunction) {
    const { nickname, data } = req.body;
    try {
      if (!nickname) return res.status(400).json({ status: "error", error: "nickname is required" });
      if (!data) return res.status(400).json({ status: "error", error: "data: alias or account number is required" });
      nex();
    } catch (error) {
      const e = error as Error;
      res.status(500).json({ error: e.message });
    }
  }
}