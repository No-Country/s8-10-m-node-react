import "dotenv/config";
import { DataSource } from "typeorm";
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

