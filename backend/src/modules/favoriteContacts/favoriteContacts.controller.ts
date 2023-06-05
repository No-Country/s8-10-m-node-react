/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from "express";

import { generalDto } from "../../shared/dto/generalDto";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";
import { FavoriteContactServices } from "./favoriteContacts.services";
import { favoriteContactsUtils } from "./favoriteContacts.uitls";
import { accountUserServices } from "../accountUser/accountUser.services";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

export class FavoriteContactController extends FavoriteContactServices {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    const { user } = req.session;
    try {
      if (!user) return res.status(400).json({ status: "error", error: "User not found" });
      const contacts = await this.getAllByUser(user.userId);
      const payload = generalDto.favoriteContactsFilter(contacts!);
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
      if (!user) return res.status(400).json({ status: "error", error: "User not found" });
      const accountUser = (await favoriteContactsUtils.dataFilter(data)) as AccountUserEntity; // Filter data is alias or account number
      if (!accountUser) return res.status(400).json({ status: "error", error: "AccountUser not found" });
      const newFavoriteContact = {
        accountUser,
        nickname,
        user,
      } as FavoriteContactsEntity;

      await this.postService(newFavoriteContact);

      const contacts = await this.getAllByUser(user.userId);

      const payload = generalDto.favoriteContactsFilter(contacts!);

      res.json({
        status: "success",
        payload,
      });
    } catch (error) {
      const e = error as Error;
      res.status(500).json({ error: e.message });
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
