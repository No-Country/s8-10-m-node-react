import { NextFunction, Request, Response } from "express";
import { UserEntity } from "../user/user.entity";
import { hashPassword } from "../../shared/utils/hashPassword.utils";
import { httpError } from "../../shared/utils/httpError.utils";

export class AuthMiddlewares {

  async checkDataUserMiddleware(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {

      if (!email || !password) return httpError.response(res, 400, "Email and password are required");

      const user = await UserEntity.findOneBy({ email });
      if (!user) return httpError.response(res, 400, "Incorrect data");

      const userPass = await hashPassword.comparePassword(password, user.password);
      if (!userPass) return httpError.response(res, 400, "Incorrect data");

      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
