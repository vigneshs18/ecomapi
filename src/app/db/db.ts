import * as mongoose from 'mongoose';

export class MongoConnect {
    static connect() {
        // console.log(process.env.MONGODB_ATLAS_URL);
        const mongoDBConn = process.env.MONGODB_ATLAS_URL || '';
        return mongoose.connect(mongoDBConn,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            }
        );
    }
}