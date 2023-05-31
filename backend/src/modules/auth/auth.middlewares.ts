import { NextFunction, Request, Response } from "express";
import { UserEntity } from "../user/user.entity";
import { hashPassword } from "../user/utils/hashPassword.utils";

export class AuthMiddlewares {

  async checkDataUserMiddleware(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await UserEntity.findOneBy({ email });
      
      if (!user) return res.status(400).json({ error: "Incorrect data entered" });

      const userPass = hashPassword.comparePassword(password, user.password);
      
      if (!userPass) return res.status(400).json({ error: "Incorrect data entered" });
      
      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  }

}
