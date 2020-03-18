import { Request, Response, NextFunction } from 'express';

export class UserController {
    static login(req: Request, res: Response, next: NextFunction) {
        res.json({ user: "test", success: "true" });
    }
    static registration(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        res.json({ user: "test", success: "true" });
    }
    static updateProfile(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        res.json({ user: "test", success: "true" });
    }
}