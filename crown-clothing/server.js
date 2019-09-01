const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Initialize express app, API Server
const app = express();
// If there's a port value on the process env, use that otherwise local: 5000
const port = process.env.PORT || 5000;

// Ensure body tags are processed as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cross Origin Request library
app.use(cors());

if (process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))
    // Specifies route to be used
    // app.get specifies REST parameters to be used
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', index.html))
    });
}

app.listen(port, error => {
    // Throw error if error
    if(error) throw error;
    // Otherwise log port!
    console.log('Serverrunning on port ' + port);
})
