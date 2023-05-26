import { BaseRouter } from "../../shared/router/router";
import { BusinessController } from "./business.controller";
import { BusinessMiddlewares } from "./business.middlew";

export class BusinessRouter extends BaseRouter<BusinessController, BusinessMiddlewares> {
  constructor() {
    super(BusinessController, BusinessMiddlewares, "business");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAllControllerTerms(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getByIdController(req, res));
    this.router.post(`/${path}/transfer/:address`, (req, res) => this.controller.postControllerTransfer(req, res));
    this.router.post(`/${path}/deposit/:address`, (req, res) => this.controller.postControllerDeposit(req, res));
    this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }

}