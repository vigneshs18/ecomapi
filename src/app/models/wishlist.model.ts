import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const WishListSchema = new Schema({
    productId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    status: {
        type: String,
        default: 'A'
    },
    modifiedOn: {
        type: Date
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});

export const WishList = model('WishList', WishListSchema);