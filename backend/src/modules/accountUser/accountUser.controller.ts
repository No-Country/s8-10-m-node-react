import { Request, Response } from "express";
import { AccountUserServices } from "./accountUser.services";
import { accountUserUtils } from "./accountUser.utils";
import { UserEntity } from "../user/user.entity";

export class AccountUserController extends AccountUserServices {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    try {
      const result = await this.getServices();
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getByIdController(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.getServicesById(parseInt(id));
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async postController(user: UserEntity) {
    
    // try {

    //   // Generated card
    //   // Implement utils alias generator and count number generator
    //   // const accountUser = {
    //   //   alias: "alias",
    //   //   typeCount: "CA",
    //   //   accountNumber: accountUserUtils.generateAccountNumber(),
    //   //   user,

    //   // };
    //   // const result = await this.postService(body);
    //   res.json({
    //     status: "success",
    //     // response: result,
    //   });
    // } catch (error) {
    //   res.status(500).json({ error });
    // }
  }

  async putController(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      const result = await this.putService(parseInt(id), body);
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async deleteController(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.deleteService(parseInt(id));
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export const accountUserController = new AccountUserController();