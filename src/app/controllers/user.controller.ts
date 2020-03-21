import { Request, Response, NextFunction, Errback } from 'express';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { User } from '../models/user.model';

export class UserController {

    static login(req: Request, res: Response, next: NextFunction) {
        const private_key: string = process.env.PRIVATE_KEY || '';
        User.findOne({ email: req.body.email }, (err: Errback, result: any) => {
            if(err) {
                // for err case
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                // for result case
                if(result != undefined) { 
                    // for email found case
                    // != wiil take care of both 'null' & 'undefined' values
                     if(compareSync(req.body.password, result.password)) {
                        // for correct password case
                        // generating a token for succesful login
                        const token = sign({ id: result._id }, private_key, { expiresIn: '1h' });
                        res.status(200).json(
                            { status: 'success', message: 'login success', data: token }
                        );
                    } else {
                        // for incorrect password case
                        res.status(401).json(
                            { status: 'failed', message: 'Incorrect password' }
                        );
                    }
                } else {
                    // for email not found case
                    res.status(404).json(
                        { status: 'failed', message: 'Email not found' }
                    );
                }
            }
        });
    }

    static registration(req: Request, res: Response, next: NextFunction) {
        const user = new User(req.body);
        User.create(user, (err: Errback, result: any) => {
            if(err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                res.status(201).json(
                    { status: 'success', message: 'Registration Successful', data : result }
                );
            }
        });
    }

    static updateProfile(req: Request, res: Response, next: NextFunction) {
        const userId = req.body.userId;
        User.findByIdAndUpdate(userId, {
           $set: {
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               addressInfo: req.body.addressInfo
           } 
        }, (err: Errback, result: any) => {
            if(err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                res.status(200).json({ status: 'success', message: 'Profile updated', data : null });
            }
        });
    }

    static getProfile(req: Request, res: Response, next: NextFunction) {
        const userId = req.body.userId;
        User.findById(userId, (err: Errback, result: any) => {
            if(err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                res.status(200).json(
                    { status: 'success', message: 'Profile found', data: result }
                );
            }
        });
    }

}