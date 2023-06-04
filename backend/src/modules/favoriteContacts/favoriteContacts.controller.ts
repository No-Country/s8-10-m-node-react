/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from "express";

import { generalDto } from "../../shared/dto/generalDto";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";
import { FavoriteContactServices } from "./favoriteContacts.services";
import { favoriteContactsUtils } from "./favoriteContacts.uitls";

export class FavoriteContactController extends FavoriteContactServices {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    const { user } = req.session;
    try {
      if (!user) return res.status(400).json({ status: "error", error: "User not found" });
      const payload = await this.getAllByUser(user.userId);
      res.json({
        status: "success",
        payload,
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
    const { user } = req.session;
    const { nickname, data } = req.body;
    try {
      const accountUser = await favoriteContactsUtils.dataFilter(data); // Filter data is alias or account number
      if (!accountUser) res.status(400).json({ status: "error", error: "User not found" });
      const newFavoriteContact = {
        nickname,
        user,
        accountUser,
      } as FavoriteContactsEntity;
      await this.postService(newFavoriteContact);
      const contacts = await this.getServices();
      const payload = generalDto.favoriteContactsFilter(contacts);

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
    const { nickname } = req.body;
    try {
      const contact = await this.getFavoriteContactByNickName(nickname);
      if (!contact) return res.status(400).json({ status: "error", error: "Favorite contact not found" });
      await this.deleteService(contact.id!);
      res.json({
        status: "success",
        response: `Contact ${contact.nickname} deleted`,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export const favoriteContactController = new FavoriteContactController();
