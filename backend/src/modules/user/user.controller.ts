import { Request, Response } from "express";
import { UserData, accountUserHandler } from "./user.utils";
import { UserService } from "./user.services";
import { httpError } from "../../shared/utils/httpError.utils";
import { generalDto } from "../../shared/dto/generalDto";
import { UserEntity } from "./user.entity";

export class UserController extends UserService {
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

  async getByEmailorAlias(req: Request, res: Response) {
    const { term } = req.params;
    if(!term) return httpError.response(res, 400, "Alias or term is requerid");
    try {
      const result=await this.getUserByaliasOremail(term);
      if(!result) return httpError.response(res, 400, "Alias or term is requerid");
      req.session.user = result;
      const payload = generalDto.loginReturn(result);
      res.cookie("user", result, {
        httpOnly: true,
      });
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
    try {
      const result = await accountUserHandler.createUserTransaction(req.body) as UserData;
      if (!result) httpError.response(res, 400, "Error creating user");

      res.json({
        status: "success",
        response: "User created successfully",
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
