import { Response } from "express";

export class HttpError extends Error {

    internal(res: Response, status: number, error: Error) {
      res.status(status).json({ status: "error", error: error.message });
    }
    
    response(res: Response, status: number, error: string) {
      res.status(status).json({ status: "error", error });
    }
}

export const httpError = new HttpError();