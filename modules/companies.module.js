module.exports =
    class Company {
        constructor(name) {
            this.name = name;
            this.employees = [];
        }
        addEmployee(emp) {
            // push emloyee into this.employees array
            console.log('push employee func');
            this.employees.push(emp);
        }
        addBonus() {
            console.log('addBonus func');
        }
    }