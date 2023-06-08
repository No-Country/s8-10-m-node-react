import { BaseRouter } from "../../shared/router/router";
import { UserController } from "./user.controller";
import { UserMiddlewares } from "./user.middlewares";

export class UserRouter extends BaseRouter<UserController, UserMiddlewares> {
  constructor() {
    super(UserController, UserMiddlewares, "user");
  }

  routes(path: string): void {
    // this.router.get(`/${path}`, (req, res) => this.controller.getAllController(req, res));
    this.router.get(`/${path}/:term`, (req, res) => this.controller.getByEmailorAlias(req, res));
    this.router.post(`/${path}`,
      (req, res, next) => this.middleware.checkUser(req, res, next),
      (req, res) => this.controller.postController(req, res));
    this.router.put(`/${path}/:id`, (req, res) => this.controller.putController(req, res));
    this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }
}
