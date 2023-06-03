import { BaseServices } from "../../shared/services/baseServices";
import { BusinessEntity } from "./business.entity";

export class BusinessService extends BaseServices<BusinessEntity> {
  constructor() {
    super(BusinessEntity);
  }
}