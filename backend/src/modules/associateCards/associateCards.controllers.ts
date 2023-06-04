import { Request, Response } from "express";
import { generalDto } from "../../shared/dto/generalDto";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { AssociateCardsEntity } from "./associateCards.entity";
import { AssociateCardsServices } from "./associateCards.services";

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
    const { cardNumber, cvv, issuingEntity, type, cardholder } = req.body;
    const user = req.session.user;
    try {
      const accountUser = await (
        await this.getRepository(AccountUserEntity)
      ).findOne({ where: { accountNumber: user?.account[0].accountNumber } });
      if (!accountUser) return res.status(400).json({ msg: "No encuentro la cuenta" });
      const newCard = {
        cardNumber,
        cvv,
        cardholder,
        issuingEntity,
        type,
        accountUser,
      } as unknown as AssociateCardsEntity;
      await this.postService(newCard);
      const cards = await this.getServices();
      const payload = generalDto.filterCards(cards);

      res.json({
        status: "success",
        payload,
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
