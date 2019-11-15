const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

//DBconfig
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongodb connected...') )
    .catch(err=>console.log(err));

//use routes
app.use('/api/items',items);

const port = process.env.port || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));
