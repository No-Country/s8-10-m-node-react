import { NextFunction, Request, Response } from "express";
import session from "express-session";
import { BaseEntity, EntityTarget, FindOptionsWhere, Repository } from "typeorm";
import { AppDataSource } from "../../config/postgreSql";
import { UserEntity } from "../../modules/user/user.entity";
import { authUtils } from "../utils/auth.utils";
import { httpError } from "../utils/httpError.utils";

declare module "express-session" {
  export interface SessionData {
    token: string;
    user: UserEntity;
    accountNumber: string;
  }
}

export abstract class BaseMiddlewares<T extends BaseEntity> {
  // public secretKey = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;
  public repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entity);
  }

  async checkId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const idCheck = await this.repository.findOneBy({ id: Number(id) } as unknown as FindOptionsWhere<T>);
      if (!idCheck) return httpError.response(res, 404, "ID not found");

      return next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }

  async checkToken(req: Request, res: Response, next: NextFunction) {
    const {token}= req.cookies;

    try {
      if (!token) return httpError.response(res, 400, "A token is expected");

      const jwtPayload = authUtils.verifyToken(token);
      if (!jwtPayload) return httpError.response(res, 400, "Invalid token");

      next();
    } catch (error) {
      httpError.internal(res, 500, error as Error);
    }
  }

  async getRepository<U extends BaseEntity>(entity: EntityTarget<U>) {
    return AppDataSource.getRepository(entity);
  }
}
