import { BaseRouter } from "../../shared/router/router";
import { AuthController } from "./auth.controller";
import { AuthMiddlewares } from "./auth.middlewares";

export class AuthRouter extends BaseRouter<AuthController, AuthMiddlewares> {
  constructor() {
    super(AuthController, AuthMiddlewares, "auth");
  }

  routes(path: string): void {
  
    this.router.post(`/${path}`,
      (req, res, nex) => this.middleware.checkDataUserMiddleware(req, res, nex),
      (req, res) => this.controller.postController(req, res)
    );
    
  }
}
