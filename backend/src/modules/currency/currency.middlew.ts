import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { CurrencyEntity } from "./currency.entity";

export class CurrencyMiddlewares extends BaseMiddlewares<CurrencyEntity> {
  constructor() {
    super(CurrencyEntity);
  }
}