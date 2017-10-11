const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const employees = require('./modules/employees.module');
const companies = require('./modules/companies.module');

// app.listen(port, function(){
//     console.log('Listening on port', port);
// });

app.use(bodyParser.json());

// testing employees.modules.js below
let Joey = new employees('Joey', 'May114', 80000, 5);
console.log(Joey);

// testing companies.module.js below
let Microsoft = new companies('Microsoft');
console.log(Microsoft);

// testing connection between employees and companies
Microsoft.addEmployee(Joey);
console.log(Microsoft);