const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const employees = require('./modules/employees.module');
// const companies = require('./modules/companies.module');


// app.listen(port, function(){
//     console.log('Listening on port', port);
// });


app.use(bodyParser.json());

let Joey = new employees('Joey');

console.log(Joey);
