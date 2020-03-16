const express = require('express');  
const cors = require('cors');
const mongoose = require('mongoose'); // help to connect mongodb database

//create express server
const app = express();
const port = process.env.PORT || 5000;

//middlewares 
app.use(cors());  // cors middaleware
app.use(express.json()); // allows to get JSON

// server listening port
app.listen(port, () => {
    console.log('Server is running on port :' + port);
});
