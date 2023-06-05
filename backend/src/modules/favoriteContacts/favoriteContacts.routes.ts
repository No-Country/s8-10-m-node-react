import { BaseRouter } from "../../shared/router/router";
import { FavoriteContactController } from "./favoriteContacts.controller";
import { FavoriteContactMiddleware } from "./favoriteContacts.middleware";

export class FavoriteContactRouter extends BaseRouter<FavoriteContactController, FavoriteContactMiddleware> {
  constructor() {
    super(FavoriteContactController, FavoriteContactMiddleware, "favorites");
  }
  routes(path: string): void {
    this.router.get(
      `/${path}`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res) => this.controller.getAllController(req, res)
    );
    this.router.post(
      `/${path}`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res, next) => this.middleware.checkData(req, res, next),
      (req, res) => this.controller.postController(req, res)
    );
    this.router.delete(
      `/${path}`,
      (req, res, next) => this.middleware.checkToken(req, res, next),
      (req, res, next) => this.middleware.checkNickName(req, res, next),
      (req, res) => this.controller.deleteController(req, res)
    );
  }
}
