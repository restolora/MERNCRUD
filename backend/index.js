const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// middlewares 
app.use(bodyParser.json());
app.use(cors());

// routes 
const usersRoutes = require('./routes/Users');
app.use('/users', usersRoutes);



// connection to mongodb
const mongoose = require('mongoose');
const dbConfig = 'mongodb://127.0.0.1:27017';
const dbName = 'test';

mongoose.connect(`${dbConfig}/${dbName}`, 
    { useNewUrlParser : true, useUnifiedTopology: true },
    (err) => err ? console.log('Connection error', err) : console.log('connected')
)

// api
const port = 3001;
app.listen(port, function(){
    console.log('Express server is running at port', port)
})


