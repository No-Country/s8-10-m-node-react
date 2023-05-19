import { BaseServices } from "../../shared/services/baseServices";
import { RecoveryPasswordEntity } from "./recoveryPassword.entity";

export class RecoveryPasswordService extends BaseServices<RecoveryPasswordEntity> {
    constructor() {
        super(RecoveryPasswordEntity);
    }
}