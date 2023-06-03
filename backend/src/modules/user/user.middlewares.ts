import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { UserEntity } from "./user.entity";

export class UserMiddlewares extends BaseMiddlewares<UserEntity> {
  constructor() {
    super(UserEntity);
  }
}
