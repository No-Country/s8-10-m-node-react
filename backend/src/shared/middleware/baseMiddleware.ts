import { BaseEntity, EntityTarget, FindOptionsWhere, Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";
// import { GetPublicKeyOrSecret, Secret, JwtPayload } from "jsonwebtoken";
import { AppDataSource } from "../../db/postgreSql";
import { authUtils } from "../../modules/auth/auth.utils";

// import { verifyToken } from "../../modules/auth/utils/jwtHandle.utils";
// import { AuthResponses } from "../../modules/auth/utils/auth.constants";

export abstract class BaseMiddlewares<T extends BaseEntity> {
  // public secretKey = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;
  public repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entity);
  }

  async checkId(req: Request, res: Response, nex: NextFunction) {
    const { id } = req.params;
    try {
      const idCheck = await this.repository.findOneBy({ id: Number(id) } as unknown as FindOptionsWhere<T>);
      if (!idCheck)
        return res.status(404).json({
          status: false,
          msg: "ID not found",
        });

      return nex();
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }

  async checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header("set-token");

    try {
      if (!token) return res.status(403).json({error: "A token is expected"});

      const jwtPayload = authUtils.verifyToken(token);
      if (!jwtPayload) return res.status(403).json({error: "Invalid token"});
      next();
    } catch (error) {
      return res.status(403).json(error);
    }
  }
}
