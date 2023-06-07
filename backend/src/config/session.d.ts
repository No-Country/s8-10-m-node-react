import session from "express-session";
import { UserEntity } from "../modules/user/user.entity";

declare module "express-session" {
  interface SessionData {
    token: string;
    user: UserEntity;
    accountNumber: string;
  }
}
