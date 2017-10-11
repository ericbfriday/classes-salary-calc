const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.listen(port, function(){
    console.log('Listening on port', port);
});

app.use(bodyParser.json());

class Employee {
    constructor(name, startDate, salary, reviewRating){
        this.name = name;
        this.startDate = startDate;
        this.salary = salary;
        this.reviewRating = reviewRating;
    }
    calcDays() {
        // calcDays code
        console.log('calcDays func called');
    }
}

let Joey = new Employee('Joey', '10-3-2017', 80000, 5);


class Company {
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(emp) {
        // push emloyee into this.employees array
        console.log('push employee func');
        
    }
    addBonus() {
        console.log('addBonus func');
    }
}

let Microsoft = new Company('Microsoft');