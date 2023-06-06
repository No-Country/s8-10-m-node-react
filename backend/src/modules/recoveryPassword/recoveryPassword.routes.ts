import { BaseRouter } from "../../shared/router/router";
import { RecoveryPasswordController } from "./recoveryPassword.controller";
import { RecoveryPasswordMiddlewares } from "./recoveryPassword.middleware";

export class RecoveryPasswordRouter extends BaseRouter<RecoveryPasswordController, RecoveryPasswordMiddlewares>{
    constructor() {
        super(RecoveryPasswordController, RecoveryPasswordMiddlewares, "recovery");
    }
    routes(path: string): void {
        this.router.get(`/${path}/verifyEmail/:email`, (req, res) => this.controller.verifyEmailController(req, res));
        this.router.get(`/${path}/:email`, (req, res) => this.controller.recoveryPasswordController(req, res));
    }
}