import { BaseRouter } from "../../shared/router/router";
import { UserController } from "./user.controller";
import { UserMiddlewares } from "./user.middlewares";

export class UserRouter extends BaseRouter<UserController, UserMiddlewares> {
  constructor() {
    super(UserController, UserMiddlewares, "user");
  }

  routes(path: string): void {
    this.router.get(`/${path}`, (req, res) => this.controller.getAllController(req, res));
    this.router.get(`/${path}/:id`, (req, res) => this.controller.getByIdController(req, res));
    this.router.post(`/${path}`,
    (req, res, nex) => this.middleware.checkUser(req, res, nex),
      (req, res) => this.controller.postController(req, res));
    this.router.put(`/${path}/:id`, (req, res) => this.controller.putController(req, res));
    this.router.delete(`/${path}/:id`, (req, res) => this.controller.deleteController(req, res));
  }
}
