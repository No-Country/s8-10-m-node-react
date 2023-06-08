import { Request, Response } from "express";

import { generalDto } from "../../shared/dto/generalDto";
import { AuthServices } from "./auth.services";
import { httpError } from "../../shared/utils/httpError.utils";

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
      res.cookie("token", token.toString(), {
        httpOnly: true,
      });
      res.cookie("user", JSON.stringify(user), {
        httpOnly: true,
      });

      res.json({
        status: "success",
        payload,
      });
    } catch (error) {
      console.log(error);
      httpError.internal(res, 500, error as Error);
    }
  }
}
