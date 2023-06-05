/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Request, Response } from "express";
import { generalDto } from "../../shared/dto/generalDto";
import { AssociateCardsEntity } from "./associateCards.entity";
import { AssociateCardsServices } from "./associateCards.services";
export class AssociateCardsController extends AssociateCardsServices {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    const { user } = req.session;
    try {
      if (!user) return res.status(400).json({ status: "error", error: "User not found" });
      const cards = await this.getAllByAccount(user?.account[0].id!);
      const payload = generalDto.filterCards(cards);
      res.json({
        status: "success",
        payload,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getByIdController(req: Request, res: Response) {
    const { id } = req.body;
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
    const { user } = req.session;
    try {
      if (!user) return res.status(400).json({ status: "error", error: "User not found" });
      const newCard = {
        cardNumber,
        cvv,
        cardholder,
        issuingEntity,
        type,
        accountUser: user?.account[0],
      } as unknown as AssociateCardsEntity;
      await this.postService(newCard);

      const cards = await this.getAllByAccount(user?.account[0].id!);
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
    const body = req.body;
    const { user } = req.session;
    try {
      const cardNumber = body.cardNumber;
      const card = await this.repository.findOne({ where: { cardNumber } });
      if (!card) return res.status(400).json({ status: "error", error: "Card not found" });
      const result = await this.putService(card.id!, body);
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async deleteController(req: Request, res: Response) {
    const { cardNumber } = req.body;
    try {
      const card = await this.repository.findOne({ where: { cardNumber } });
      if (!card) return res.status(400).json({ status: "error", error: "Card not found" });
      await this.deleteService(card.id!);
      res.json({
        status: "success",
        msg: `Card number ${cardNumber} deleted`,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
