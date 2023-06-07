import { BaseRouter } from "../../shared/router/router";
import { BusinessController } from "./business.controller";
import { BusinessMiddlewares } from "./business.middlew";

export class BusinessRouter extends BaseRouter<BusinessController, BusinessMiddlewares> {
  constructor() {
    super(BusinessController, BusinessMiddlewares, "business");
  }

  routes(path: string): void {
    // this.router.get(`/${path}`, (req, res) => this.controller.getAllControllerTerms(req, res));
    this.router.get(`/${path}`, (req, res) => this.controller.getByAccountController(req, res));

    this.router.post(`/${path}`,
      // (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res, next) => this.middleware.checkTransactionType(req, res, next),
      (req, res, next) => this.middleware.checkAccountUser(req, res, next),
      (req, res) => this.controller.postController(req, res));
    this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }

}