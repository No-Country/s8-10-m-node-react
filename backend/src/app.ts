
import "dotenv/config";

import express from 'express';
import cors from "cors";
import morgan from "morgan";

class AppServer {
  private app = express();
  private PORT = process.env.PORT || 3000

  constructor() {
    this.middlewares();
    this.listen();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));

  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server on port ${this.PORT}`);
    });
  }
}

new AppServer();
