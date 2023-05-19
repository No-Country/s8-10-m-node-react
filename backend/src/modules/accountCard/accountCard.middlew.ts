import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AccountCardEntity } from "./accountCard.entity";


export class AccountCardMiddlewares extends BaseMiddlewares<AccountCardEntity> {
  constructor() {
    super(AccountCardEntity);
  }
}