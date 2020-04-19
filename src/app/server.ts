import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { MongoConnect } from './db/db';
import { 
    userRoutes,
    categoryRoutes,
    productRoutes,
    errorLogRoutes,
    wishListRoutes,
    cartRoutes,
    orderRoutes
} from './routes/index';

dotenv.config();
var app = express();

// app.get('/', (req, res) => {
//     res.send('this is get call EXPRESS API');
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/errorLog', errorLogRoutes);
app.use('/wishlist', wishListRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

app.listen(process.env.PORT || 3000, () => {
    MongoConnect.connect().then(res => console.log('MongoDB Atlas Connected'));
    console.log('Server running on port 3000');
});