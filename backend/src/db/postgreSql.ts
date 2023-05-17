import { DataSource } from "typeorm";
import "dotenv/config";
import { UserEntity } from "../modules/user/user.entity";
import { BusinessEntity } from "../modules/business/business.entity";
import { AccountAmountEntity } from "../modules/accountAmount/accountAmount.entity";
import { AccountCardEntity } from "../modules/accountCard/accountCard.entity";
import { AccountTypeEntity } from "../modules/accountType/accountType.entity";
import { AccountUserEntity } from "../modules/accountUser/accountUser.entity";
import { CurrencyEntity } from "../modules/currency/currency.entity";
import { RecoveryPasswordEntity} from "../modules/recoveryPassword/recoveryPassword.entity";
const DBPort = !process.env.PORT_DB ? 5432 : parseInt(process.env.PORT_DB);

const setSSL = !process.env.SSL_SUPPORT
  ? false
  : process.env.SSL_SUPPORT === "0"
  ? false
  : process.env.SSL_SUPPORT === "1" && true;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: DBPort,
  username: process.env.USERNAME_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  subscribers: [],
  ssl: setSSL,
  migrationsRun: true,
});

//[__dirname + "/../**/*.entity{.ts,.js}"]

/* [
  UserEntity,
  AccountTypeEntity,
  CurrencyEntity,
  AccountAmountEntity,
  AccountUserEntity,
  AccountCardEntity,
  BusinessEntity,
  RecoveryPasswordEntity
],
*/
