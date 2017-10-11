// const router = require('express').Router;

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


module.exports = Company();