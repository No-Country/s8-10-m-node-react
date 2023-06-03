import { Request, Response } from "express";
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
      //TODO Armar el DTO para devolver al cliente
      res.json({
        status: "success",
        response: "Successful entry",
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
