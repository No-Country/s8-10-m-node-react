import { BaseRouter } from "../../shared/router/router";
import { AccountUserController } from "./accountUser.controller";
import { AccountUserMiddlewares } from "./accountUser.middlew";

export class AccountUserRouter extends BaseRouter<AccountUserController, AccountUserMiddlewares> {
  constructor() {
    super(AccountUserController, AccountUserMiddlewares, "accountUser");
  }

  routes(path: string): void {
    // this.router.get(`/${path}`, (req, res) => this.controller.getAllController(req, res));
    // this.router.get(`/${path}/:id`, (req, res) => this.controller.getByIdController(req, res));
    // this.router.post(`/${path}`, (req, res) => this.controller.postController(req, res));
    // this.router.put(`/${path}/:id`, (req, res) => this.controller.putController(req, res));
    // this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }
}
