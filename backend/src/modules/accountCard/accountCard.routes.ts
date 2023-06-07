import { BaseRouter } from "../../shared/router/router";
import { AccountCardController } from "./accountCard.controller";
import { AccountCardMiddlewares } from "./accountCard.middlew";



export class AccountCardRouter extends BaseRouter<AccountCardController,AccountCardMiddlewares> {
  constructor() {
    super(AccountCardController, AccountCardMiddlewares, "card");
  }

  routes(path: string): void {
    // this.router.get(`/${path}`, (req, res) => this.controller.getAllController(req, res));
    // this.router.get(`/${path}/:id`, (req, res) => this.controller.getByIdController(req, res));
    // this.router.post(`/${path}`, (req, res) => this.controller.postController(req, res));
    // this.router.put(`/${path}/:id`, (req, res) => this.controller.putController(req, res));
    // this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }
}