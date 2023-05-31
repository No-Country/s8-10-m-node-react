import { Request, Response } from "express";
import { UserDto } from "../user/user.dto";
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

      req.session.user = user;
      req.session.token = token;

      const result = new UserDto(
        user.userId,
        user.email,
        user.phone,
        user.address,
        user.country,
        user.postalCode,
        user.fullName,
        user.lastName
      );

      res.json({
        status: "success",
        response: result,
        token,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
