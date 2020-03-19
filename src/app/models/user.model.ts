import { Schema, model } from 'mongoose';
import { genSalt, hash } from 'bcryptjs';

const salt_round: number | any = process.env.SALT_ROUND;

let AddressSchema = new Schema({
    addressLine1: String,
    addressLine2: String,
    city: String,
    pin: String
});

let UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        maxlength: 20
    },
    mobile: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        trim: true,
        required: true
    },
    addressInfo: AddressSchema,
    role: {
        type: String,
        trim: true,
        required: true,
        default: 'User'
    }
});

UserSchema.pre('save', function(next){
    const user: any = this;

    if(user.isModified('password')) {
        const saltRound = parseInt(salt_round);
        genSalt(saltRound, (err, salt) => {
            hash(user.password, salt, (err, hash: any) => {
                if(err) {
                    throw err
                } else {
                    user.password = hash;
                    next();
                }
            })
        })
    } else {
        next();
    }
})

export const User = model('User', UserSchema);