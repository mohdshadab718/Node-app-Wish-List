const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//Body_Parser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

// Middle_Ware
// --------------------------------------------

// ->Access-Control 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET', 'POST', 'DELETE', 'PUT');
    next();
})
// ->Routes
app.use('/', require('./routes')); // <=> app.use(require('./routes'));

// ->Serving Static File 
app.use(express.static('public'))

// -----------------------------------------------

//Setting View Engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
