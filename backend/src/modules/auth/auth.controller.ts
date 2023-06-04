import { Request, Response } from "express";

import { generalDto } from "../../shared/dto/generalDto";
import { AuthServices } from "./auth.services";

export class AuthController extends AuthServices {
  constructor() {
    super();
  }

  async postController(req: Request, res: Response) {
    const { email } = req.body;
    try {
      const resp = await this.postService(email);
      const { token, user } = resp;
      req.session.token = token;
      req.session.user = user;
      const payload = generalDto.loginReturn(user);
      res.json({
        status: "success",
        payload,
      });
    } catch (error) {
      console.log(error);
      const e = error as Error;
      res.status(500).json({ error: e.message });
    }
  }
}
