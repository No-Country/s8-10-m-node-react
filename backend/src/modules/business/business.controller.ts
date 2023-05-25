import { Request, Response } from "express";
import { BusinessService } from "./business.services";
import { Status, Transaction } from "./business.entity";

export class BusinessController extends BusinessService {
  constructor() {
    super();
  }

  async getAllControllerTerms(req: Request, res: Response) {
    try {
      const{status,transaction}=req.query
      const typeStatus=["PEDING","APPROVED","REJECTED"]
      const typeTransaction=["PAY","DEPOSIT","EXTRACTION","TRANSFER"]
      const TransactionEnum=transaction as Transaction.PAY|Transaction.DEPOSIT|Transaction.EXTRACTION|Transaction.TRANSFER
      const StatusEnum=status as Status.PENDING|Status.APPROVED|Status.REJECTED
      const result = await this.getBusinessType(StatusEnum,TransactionEnum);
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
    const {address}=req.params
    const body = req.body;
    try {
      const result = await this.postServiceTransfer(body,address);
      
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