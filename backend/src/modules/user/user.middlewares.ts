import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { UserEntity } from "./user.entity";
import { httpError } from "../../shared/utils/httpError.utils";

export class UserMiddlewares extends BaseMiddlewares<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async checkUser(req: Request, res: Response, next: NextFunction) {
    const { dni, email, phone } = req.body;
    try {
     
      if (!dni || !email || !phone) return httpError.response(res, 400, "Incomplete data");
     
      const userMail = await this.repository.findOne({ where: { email } });
      if (userMail) return httpError.response(res, 400, "Email already exists");
     
      const userDni = await this.repository.findOne({ where: { dni } });
      if (userDni) return httpError.response(res, 400, "Dni already exists");
     
      const userPhone = await this.repository.findOne({ where: { phone } });
      if (userPhone) return httpError.response(res, 400, "Phone already exists");
     
      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
