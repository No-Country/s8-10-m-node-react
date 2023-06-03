import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { BusinessEntity } from "./business.entity";

export class BusinessMiddlewares extends BaseMiddlewares<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }
}