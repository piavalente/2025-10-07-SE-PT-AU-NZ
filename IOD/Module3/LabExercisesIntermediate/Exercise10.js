const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')


// a) Print the total number of minutes that have passed so far today
const totalMinutes = today.getHours() *60 + today.getMinutes()  //multiply hours and minutes first
console.log(totalMinutes + " minutes have passed so far today")

// b) Print the total number of seconds that have passed so far today
const totalSeconds = today.getHours() *3600 + today.getMinutes() *60 + today.getSeconds()
console.log(totalSeconds + " seconds have passed so far today")

// c) Calculate and print your age as: 'I am x years, y months and z days old'
const todayAge = new Date()
const myBirthday = new Date(1990, 11, 24)   // 1990 Dec 24

let years = todayAge.getFullYear() - myBirthday.getFullYear();
let months = todayAge.getMonth() - myBirthday.getMonth();
let days = todayAge.getDate() - myBirthday.getDate();

/* my birthday has not happened yet so it is reulting to a negative. 
Result is: 35 years, -1 months, -1 day old
So borrow 1 year, then add 12 months to become positive, then add months and days.
*/

if (months < 0) {
    years--;
    months += 12;
}

if (days < 0) {
    months --;    
    const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days = days + daysInPrevMonth; 
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

/* d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates. */


//Total number of day between my birthday and today
function daysInBetween(date1, date2) {
    let start = new Date(date1);
    let end = new Date(date2);
    let count = 0;

    // Make sure start is before end
    if (start > end) {
        [start, end] = [end, start];
    }

    while (start < end) {
        start.setDate(start.getDate() + 1); // go to next day
        count++;
    }

    return count;
}

const daysSinceBirthday = daysInBetween(myBirthday, today);
console.log(`There are ${daysSinceBirthday} days between my birthday and today.`);
