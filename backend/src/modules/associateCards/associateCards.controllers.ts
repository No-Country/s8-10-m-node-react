import { Request, Response } from "express";
import { AssociateCardsServices } from "./associateCards.services";
import { AssociateCardsEntity } from "./associateCards.entity";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { SaveOptions, RemoveOptions } from "typeorm";

export class AssociateCardsController extends AssociateCardsServices {
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
    const { cardNumber, cvv, issuingEntity, type, cardholder, accountNumber } = req.body ;
    
    try {
      const userAccount = await (await this.getRepository(AccountUserEntity)).findOne({ where: { accountNumber } });
      if (!userAccount) return res.status(400).json({ status: "error", error: "Account user not found" });
      const newCard: AssociateCardsEntity = {
        cardNumber,
        cvv,
        cardholder,
        issuingEntity,
        type,
        accountUser: userAccount,
        hasId: function (): boolean {
          throw new Error("Function not implemented.");
        },
        save: function (options?: SaveOptions | undefined): Promise<AssociateCardsEntity> {
          throw new Error("Function not implemented.");
        },
        remove: function (options?: RemoveOptions | undefined): Promise<AssociateCardsEntity> {
          throw new Error("Function not implemented.");
        },
        softRemove: function (options?: SaveOptions | undefined): Promise<AssociateCardsEntity> {
          throw new Error("Function not implemented.");
        },
        recover: function (options?: SaveOptions | undefined): Promise<AssociateCardsEntity> {
          throw new Error("Function not implemented.");
        },
        reload: function (): Promise<void> {
          throw new Error("Function not implemented.");
        },
      };
      const result = await this.postService(newCard);
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
