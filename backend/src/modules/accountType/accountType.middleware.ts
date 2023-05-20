import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AccountTypeEntity } from "./accountType.entity";

export class AccountTypeMiddlewares extends BaseMiddlewares<AccountTypeEntity>{
    constructor() {
        super(AccountTypeEntity);
    }
}