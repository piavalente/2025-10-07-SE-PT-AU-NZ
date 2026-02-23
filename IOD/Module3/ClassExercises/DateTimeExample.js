let today = new Date();

console.log(today);
console.log(+today);

const jan2_1970 = new Date(1000 * 60 * 60 * 24);
console.log(jan2_1970);

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas); // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
console.log(christmas.getMonth());

const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
console.log(nyeLocal); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

const boxingDay = new Date(2023, 11, 26); // month 11 is December, assumes local timezone
console.log(boxingDay); // 2023-12-25T14:00:00.000Z - so hours are different in UTC
