import { Request, Response } from "express";
import { accountUserHandler } from "./user.handler";
import { UserService } from "./user.services";

export class UserController extends UserService {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    try {
      console.log("get");
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
    try {
      const user = await accountUserHandler.createUser(req.body);

      // Create accountUser
      if (!user) return res.status(400).json({ error: "Error: user is null" });
      const accountUser = await accountUserHandler.createAccountUser(user);

      // Create accountAmount
      if (!accountUser) return res.status(400).json({ error: "Error: accountUser is null" });
      const accountAmout = await accountUserHandler.createAccountAmount(accountUser);
      // Create accountCard
      const accountCard = await accountUserHandler.createAccountCard(accountUser);

      if (!accountCard) return res.status(400).json({ error: "Error: accountCard is null" });
      if (!accountAmout) return res.status(400).json({ error: "Error: accountAmount is null" });

      const result = {
        accountUser,
        accountAmout,
        accountCard,
      };

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
