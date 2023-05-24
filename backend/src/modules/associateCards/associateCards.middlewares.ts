import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { AssociateCardsEntity } from "./associateCards.entity";

export class AssociateCardsMiddlewares extends BaseMiddlewares<AssociateCardsEntity> {
  constructor() {
    super(AssociateCardsEntity);
  }
}
