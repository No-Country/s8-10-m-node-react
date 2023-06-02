import { Request, Response } from "express";
import { baseUtils } from "../../shared/utils/baseUtils";
import { FavoriteContactServices } from "./favoriteContacts.services";

export class FavoriteContactController extends FavoriteContactServices {
  constructor() {
    super();
  }

  async getAllController(req: Request, res: Response) {
    const { token } = req.session;
    if (!token) return res.status(404).json({ message: "this user not have token" });
    const userId = await baseUtils.checkPayload(token);
    try {
      const result = await this.getAllbyUser(userId);
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
    const { token } = req.session;
    if (!token) return res.status(404).json({ message: "this user not have token" });
    const userId = await baseUtils.checkPayload(token);
    const body = req.body;
    try {
      const result = await this.postServiceContact(body, userId);
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
export const favoriteContactController = new FavoriteContactController();
