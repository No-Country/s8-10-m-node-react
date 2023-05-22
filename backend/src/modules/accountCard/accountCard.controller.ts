import { Request, Response } from "express";
import { AccountCardServices } from "./accountCard.services";
import { cardUtils } from "./utils/accountCard.utils";
import { AccountCardEntity } from "./accountCard.entity";

export class AccountCardController extends AccountCardServices {
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
    const body: AccountCardEntity = new AccountCardEntity();
    body.cardNumber = cardUtils.generateCardNumber();
    body.emission = new Date();
    body.expiration = cardUtils.generateCardExpiration();
    body.cvv = cardUtils.generateCardCvv();
    body.accountUser = req.body.accountUser; // ??

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