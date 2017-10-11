// class Employee {
//     constructor(name, startDate, salary, reviewRating){
//         this.name = name;
//         this.startDate = startDate;
//         this.salary = salary;
//         this.reviewRating = reviewRating;
//     }
//     calcDays() {
//         // calcDays code
//         console.log('calcDays func called');
//     }
// }

// let Joey = new Employee('Joey', '10-3-2017', 80000, 5);

module.exports =
    class Employee {
        constructor(name, startDate, salary, reviewRating) {
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