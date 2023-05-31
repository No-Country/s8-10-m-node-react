import { BaseMiddlewares } from "../../shared/middleware/baseMiddleware";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";

export class FavoriteContactMiddleware extends BaseMiddlewares<FavoriteContactsEntity> {
  constructor() {
    super(FavoriteContactsEntity);
  }
}