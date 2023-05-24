import { Request, Response } from "express";
import { AuthServices } from "./auth.services";

export class AuthController extends AuthServices {

  constructor() {
    super();
  }

  async postController(req: Request, res: Response) {
    const body = req.body;
    try {
      const result = await this.postService(body);
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

}
