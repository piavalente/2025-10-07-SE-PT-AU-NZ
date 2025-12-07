let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

//a)Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
    let totalSalaries = 0;                  //variable to add to
    for (let person in salaries) {
        totalSalaries += salaries[person];
    }
    return totalSalaries;                   //gives back the final total
}
console.log(sumSalaries(salaries));

/* b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary*/

function topEarner(salaries) {
    let highestSalary = 0;  
    let topSalary = "";     

    for (let person in salaries) {   // go through each person
        if (salaries[person] > highestSalary) {  
            highestSalary = salaries[person];    
            topSalary = person;                   
        }
    }
    return topSalary;
}

console.log(topEarner(salaries));
