import { BaseServices } from "../../shared/services/baseServices";
import { CurrencyEntity } from "./currency.entity";

export class CurrencyService extends BaseServices<CurrencyEntity> {
  constructor() {
    super(CurrencyEntity);
  }
}

export const currencyServices = new CurrencyService();