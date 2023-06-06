import { Request, Response } from "express";
import { RecoveryPasswordService } from "./recoveryPassword.services";

export class RecoveryPasswordController extends RecoveryPasswordService {
    constructor() {
        super();
    }

    async verifyEmailController(req: Request, res: Response) {
        const{email}=req.params
        try {
            const result = await this.verifyEmail(email);
            res.json({
                status: "success",
                response: result
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async recoveryPasswordController(req: Request, res: Response) {
        const{email}=req.params
        try {
            const result = await this.recoveryPasswordServices(email)
            res.json({
                status: "success",
                response: result
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async postController(req: Request, res: Response) {
        const body = req.body;
        try {
            const result = await this.postService(body);
            res.json({
                status: "success",
                response: result
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async putController(req: Request, res: Response) {
        const { id } = req.params;
        const body = req.body;
        try {
            const result = await this.putService(parseInt(id), body);
            res.json({
                status: "success",
                response: result
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async deleteController(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.deleteService(parseInt(id));
            res.json({
                status: "success",
                response: result
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}