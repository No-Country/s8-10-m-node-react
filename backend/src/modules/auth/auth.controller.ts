import { Request, Response } from "express";
import { AuthServices } from "./auth.services";
import { AuthDto } from "./atuh.dto";

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
      const userInfo = new AuthDto();
      const payload = userInfo.infoReturn(user);

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
