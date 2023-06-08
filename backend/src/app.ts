import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import cookieParser from "cookie-parser";
import { AppDataSource } from "./config/postgreSql";
import { RoutesApp } from "./shared/router";

class AppServer {
  private app = express();
  private PORT = process.env.PORT || 3000;
  private routes = new RoutesApp();

  constructor() {
    this.middlewares();
    this.listen();
    this.db();
  }

  private db() {
    AppDataSource.initialize()
      .then(() => {
        console.log("Database connected");
      })
      .catch((error) => console.log(error));
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(cors({ credentials: true}));
    this.app.use(morgan("dev"));
    this.app.use(
      session({
        secret: process.env.SECRET_KEY as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 30000000000000, 
          httpOnly: true
        },
      })
    );
    this.app.use("/api", this.routes.routes());
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server on port ${this.PORT}`);
    });
  }
}

new AppServer();
