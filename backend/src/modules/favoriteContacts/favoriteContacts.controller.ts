/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from "express";
import { generalDto } from "../../shared/dto/generalDto";
import { AccountUserEntity } from "../accountUser/accountUser.entity";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";
import { FavoriteContactServices } from "./favoriteContacts.services";
import { favoriteContactsUtils } from "./favoriteContacts.utils";
import { httpError } from "../../shared/utils/httpError.utils";

export class FavoriteContactController extends FavoriteContactServices {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    const { user } = req.cookies;
    try {
      if (!user) return httpError.response(res, 404, "User not found");
      const contacts = await this.getAllByUser(user.userId);
      const payload = generalDto.favoriteContactsFilter(contacts!);
      res.json({
        status: "success",
        payload,
      });
    } catch (error) {
      httpError.internal(res, 500, error as Error);
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
      httpError.internal(res, 500, error as Error);
    }
  }

  async postController(req: Request, res: Response) {
    const { user } = req.cookies;
    const { nickname, data } = req.body;
    try {
      if (!user) return httpError.response(res, 404, "User not found");
      const accountUser = (await favoriteContactsUtils.dataFilter(data)) as AccountUserEntity; // Filter data is alias or account number
      if (!accountUser) return httpError.response(res, 404, "Account not found");
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
      httpError.internal(res, 500, error as Error);
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
      httpError.internal(res, 500, error as Error);
    }
  }

  async deleteController(req: Request, res: Response) {
    const { nickname } = req.body;
    try {
      const contact = await this.getFavoriteContactByNickName(nickname);
      if (!contact) return httpError.response(res, 404, "Favorite contact not found");
      await this.deleteService(contact.id!);
      res.json({
        status: "success",
        response: `Contact ${contact.nickname} deleted`,
      });
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
export const favoriteContactController = new FavoriteContactController();
