import { BaseServices } from "../../shared/services/baseServices";
import { AccountTypeEntity } from "./accountType.entity";

export class AccountTypeService extends BaseServices<AccountTypeEntity> {
    constructor() {
        super(AccountTypeEntity);
    }
}