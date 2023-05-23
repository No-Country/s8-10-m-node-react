import { Request, Response } from "express";
import { UserService } from "./user.services";
import { accountUserController } from "../accountUser/accountUser.controller";
import { accountUserServices } from "../accountUser/accountUser.services";
import { accountUserHandler } from "../accountUser/accountUser.handler";

export class UserController extends UserService {
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

  async postController(req: Request, res: Response) {
    const body = req.body;
    try {
      // Create user
      const user = await this.postService(body);

      // Create accountUser
      if(!user) throw new Error("User not created");
      const accountUser = await accountUserHandler.createAccountUser(user);
      
      // Create accountAmount
      if(!accountUser) throw new Error("Error: accountUser is null");
      const accountAmout = await accountUserHandler.createAccountAmount(accountUser);
      // Create accountCard
      const accountCard = await accountUserHandler.createAccountCard(accountUser);

      if(!accountCard) throw new Error("Error: accountCard is null");
      if(!accountAmout) throw new Error("Error: accountAmout is null");

      const result = {
        accountUser,
        accountAmout,
        accountCard
      }

      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
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
