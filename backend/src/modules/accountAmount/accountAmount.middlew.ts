import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AccountAmountEntity } from "./accountAmount.entity";


export class AccountAmountMiddlewares extends BaseMiddlewares<AccountAmountEntity> {
  constructor() {
    super(AccountAmountEntity);
  }
}
