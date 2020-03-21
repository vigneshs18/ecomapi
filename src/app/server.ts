import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { MongoConnect } from './db/db';
import { 
    userRoutes,
    categoryRoutes,
    productRoutes
} from './routes/index';

dotenv.config();
var app = express();

// app.get('/', (req, res) => {
//     res.send('this is get call EXPRESS API');
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.listen(process.env.PORT || 3000, () => {
    MongoConnect.connect().then(res => console.log('MongoDB Atlas Connected'));
    console.log('Server running on port 3000');
});