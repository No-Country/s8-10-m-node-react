import { NextFunction, Request, Response } from "express";
import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { UserEntity } from "./user.entity";

export class UserMiddlewares extends BaseMiddlewares<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async checkUser(req: Request, res: Response, nex: NextFunction) {
    const { dni, email, phone } = req.body;
    try {
     
      if (!dni || !email || !phone) return res.status(400).json({ status: "error", error: "Data not complete" });
     
      const userMail = await this.repository.findOne({ where: { email } });
      if (userMail) return res.status(400).json({ status: "error", error: "Email already exists" });
     
      const userDni = await this.repository.findOne({ where: { dni } });
      if (userDni) return res.status(400).json({ status: "error", error: "Dni already exists" });
     
      const userPhone = await this.repository.findOne({ where: { phone } });
      if (userPhone) return res.status(400).json({ status: "error", error: "Phone already exists" });
     
      nex();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
