import { BaseRouter } from "../../shared/router/router";
import { BusinessController } from "./business.controller";
import { BusinessMiddlewares } from "./business.middlew";

export class BusinessRouter extends BaseRouter<BusinessController, BusinessMiddlewares> {
  constructor() {
    super(BusinessController, BusinessMiddlewares, "business");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAllController(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getByIdController(req, res));
    this.router.post(`/${path}`, (req, res) => this.controller.postController(req, res));
    this.router.put(`/${path}/:id`, (req, res) => this.controller.putController(req, res));
    this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }
}