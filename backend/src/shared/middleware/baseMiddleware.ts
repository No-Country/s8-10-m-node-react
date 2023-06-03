import { BaseEntity, EntityTarget, FindOptionsWhere, Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../config/postgreSql";
import { authUtils } from "../../modules/auth/auth.utils";
import session from "express-session";
import { UserEntity } from "../../modules/user/user.entity";

declare module "express-session" {
  export interface SessionData {
    token: string;
    user: UserEntity;
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
      if (!idCheck)
        return res.status(404).json({
          status: false,
          msg: "ID not found",
        });

      return next();
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.session.token;

    try {
      if (!token) return res.status(403).json({ error: "A token is expected" });

      const jwtPayload = authUtils.verifyToken(token);
      if (!jwtPayload) return res.status(403).json({ error: "Invalid token" });

      next();
    } catch (error) {
      return res.status(403).json(error);
    }
  }

  async getRepository<U extends BaseEntity>(entity: EntityTarget<U>) {
    return AppDataSource.getRepository(entity);
  }
}
