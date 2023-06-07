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
<<<<<<< HEAD
      res.cookie("token", token, {
        httpOnly: true,
      });
      res.cookie("user", user, {
        httpOnly: true,
      });
=======
      console.log(req.session.token);
      console.log(req.session.user);
>>>>>>> 57f8e077e89b5f5c042d94ba6269bae87f1fcc88
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
