import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AccountUserEntity } from "./accountUser.entity";

export class AccountUserMiddlewares extends BaseMiddlewares<AccountUserEntity> {
  constructor() {
    super(AccountUserEntity);
  }
}
