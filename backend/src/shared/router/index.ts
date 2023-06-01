import express, { Router } from "express";
import { AccountAmountRouter } from "../../modules/accountAmount/accountAmount.routes";
import { AccountCardRouter } from "../../modules/accountCard/accountCard.routes";
import { AccountUserRouter } from "../../modules/accountUser/accountUser.routes";
import { AssociateCardsRouter } from "../../modules/associateCards/associateCards.routes";
import { BusinessRouter } from "../../modules/business/business.routes";
import { CurrencyRouter } from "../../modules/currency/currency.routes";
import { RecoveryPasswordRouter } from "../../modules/recoveryPassword/recoveryPassword.routes";
import { UserRouter } from "../../modules/user/user.routes";
import { AuthRouter } from "../../modules/auth/auth.routes";
import { FavoriteContactRouter } from "../../modules/favoriteContacts/favoriteContacts.routes";



export class RoutesApp {
  public router: express.Application;
  constructor() {}

  public routes(): Router[] {
    return [
      new FavoriteContactRouter().router,
      new AccountAmountRouter().router,
      new AccountCardRouter().router,
      new AccountUserRouter().router,
      new AssociateCardsRouter().router,
      new BusinessRouter().router,
      new CurrencyRouter().router,
      new RecoveryPasswordRouter().router,
      new UserRouter().router,
      new AuthRouter().router
    ];
  }
}
