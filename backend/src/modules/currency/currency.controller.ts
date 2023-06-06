import { Request, Response } from "express";
import { CurrencyService } from "./currency.services";
import { httpError } from "../../shared/utils/httpError.utils";

export class CurrencyController extends CurrencyService {
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
    const body = req.body;
    try {
      const result = await this.postService(body);
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
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
    const { id } = req.params;
    try {
      const result = await this.deleteService(parseInt(id));
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }
}
