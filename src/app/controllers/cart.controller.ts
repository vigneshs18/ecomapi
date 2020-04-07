import { Request, Response, NextFunction, Errback } from 'express';
import { Types } from 'mongoose';

import { Cart } from '../models/cart.model';

export class CartController {

    static getUserCart(req: Request, res: Response, next: NextFunction) {
       Cart.aggregate([
            {
                $match: { userId: new Types.ObjectId(req.body.userId), status: 'A' }
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'UserCart'
                }
            }
       ], (err: Errback, result: any) => {
           if (err) {
               res.status(500).json({ status: 'failed', message: err })
           } else {
               res.json({ status: 'success', message: 'User Cart', data: result })
           }
       });
    }

    static saveToCart(req: Request, res: Response, next: NextFunction) {
        const cart = new Cart(req.body);
        Cart.create(cart, (err: Errback, result: any) => {
            if(err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                );
            } else {
                res.json({ status: 'success', message: 'Product addedd to Cart', data: {} });
            }
        });
    }

}