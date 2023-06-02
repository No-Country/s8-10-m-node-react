import { Request, Response } from "express";
import { operationsServices } from "../../shared/services/operationsServices";
import { Status, Transaction } from "./business.entity";
import { BusinessService } from "./business.services";

export class BusinessController extends BusinessService {
  constructor() {
    super();
  }

  async getAllControllerTerms(req: Request, res: Response) {
    try {
      const { status, transaction } = req.query;
      // Hacer un middleware para verificar el estado
      const StatusEnum = status as Status.PENDING | Status.APPROVED | Status.REJECTED;
      const result = await this.getBusinessType(StatusEnum, transaction as Transaction);
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
    const { typeTransaction, emitter, addressee, amountQuantity } = req.body;
    try {
      const result = await operationsServices.operationManager(typeTransaction, emitter, addressee, amountQuantity);
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      const e = error as Error;
      res.status(500).json({ error: e.message });
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
