import { Request, Response, NextFunction, Errback } from 'express';

import { Error } from '../models/error.model';

export class ErrorLogController {

    static getErrorLogs(req: Request, res: Response, next: NextFunction) {
        Error.find({}, (err: Errback, result: any) => {
            if(err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                res.status(200).json(
                    { status: 'success', message: 'Error Log found', data: result }
                );
            }
        });
    }

    static saveErrorLog(req: Request, res: Response, next: NextFunction) {
        const error = new Error(req.body);
        Error.create(error, (err: Errback, result: any) => {
            if(err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                res.status(201).json(
                    { status: 'success', message: 'Error Log added', data: result }
                );
            }
        });
    }

}