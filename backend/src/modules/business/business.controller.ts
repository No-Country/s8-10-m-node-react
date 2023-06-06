import { Request, Response } from "express";
import { generalDto } from "../../shared/dto/generalDto";
import { operationsServices } from "../../shared/services/operationsServices";
import { BusinessEntity, Status, Transaction } from "./business.entity";
import { BusinessService } from "./business.services";
import { httpError } from "../../shared/utils/httpError.utils";
import { userServices } from "../user/user.services";
import { accountUserServices } from "../accountUser/accountUser.services";

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
      httpError.internal(res, 500, error as Error);
    }
  }

  async getByIdController(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.getBusinessByUser(id);
      res.json({
        status: "success",
        response: result,
      });
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }

  async postController(req: Request, res: Response) {
    const { typeTransaction, emitter, addressee, amountQuantity, subject } = req.body;
    const { user } = req.session;

    try {
      const result = (await operationsServices.operationManager(
        typeTransaction,
        emitter,
        addressee,
        amountQuantity,
        subject
      )) as BusinessEntity;
      const accountUser = user?.account[0];
      const newBusiness = {
        ...result,
        accountUser,
      } as BusinessEntity;
      const data = await this.postService(newBusiness) as BusinessEntity;
      const business: BusinessEntity[] = [];
      business.push(data);
      const payload = generalDto.businessFilter(business);

      res.json({
        status: "success",
        payload,
      });
    } catch (error) {
      const e = error as Error;
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
