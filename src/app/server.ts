import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { userRoutes } from './routes/user.routes';
import { categoryRoutes } from './routes/category.routes';
import { MongoConnect } from './db/db';

dotenv.config();
var app = express();

// app.get('/', (req, res) => {
//     res.send('this is get call EXPRESS API');
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/category', categoryRoutes);

app.listen(3000, () => {
    MongoConnect.connect().then(res => console.log('MongoDB Connected'));
    console.log('Server running on port 3000');
});