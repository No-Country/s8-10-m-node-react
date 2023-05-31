import { Router } from "express";

export abstract class BaseRouter<T, U> {
  public router = Router();
  public controller: T;
  public middleware: U;

  constructor(Controller: { new (): T },Middlewares: { new (): U }, path: string) {
    this.routes(path);
    this.controller = new Controller();
    this.middleware = new Middlewares();
  }

  routes(path: string) {}
}
