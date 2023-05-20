import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { RecoveryPasswordEntity } from "./recoveryPassword.entity";

export class RecoveryPasswordMiddlewares extends BaseMiddlewares<RecoveryPasswordEntity>{
    constructor() {
        super(RecoveryPasswordEntity);
    }
}