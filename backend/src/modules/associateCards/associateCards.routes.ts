import { BaseRouter } from "../../shared/router/router";
import { AssociateCardsController } from "./associateCards.controllers";
import { AssociateCardsMiddlewares } from "./associateCards.middlewares";

export class AssociateCardsRouter extends BaseRouter<AssociateCardsController, AssociateCardsMiddlewares> {
  constructor() {
    super(AssociateCardsController, AssociateCardsMiddlewares, "associateCards");
  }

  routes(path: string): void {
    
    this.router.get(
      `/${path}`,
      (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res) => this.controller.getAllController(req, res)
    );
    
    this.router.post(
      `/${path}`,
      // (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res, nex) => this.middleware.checkDataCards(req, res, nex),
      (req, res) => this.controller.postController(req, res)
    );
    this.router.put(
      `/${path}`,
      // (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res, nex) => this.middleware.checkCardNumber(req, res, nex),
      (req, res) => this.controller.putController(req, res)
    );
    this.router.delete(
      `/${path}`,
      // (req, res, nex) => this.middleware.checkToken(req, res, nex),
      (req, res, nex) => this.middleware.checkCardNumber(req, res, nex),
      (req, res) => this.controller.deleteController(req, res)
    );
  }
}
