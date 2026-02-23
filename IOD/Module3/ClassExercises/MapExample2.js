let customer = { custName: "Smith", location: "Sydney" };

let order = { orderdescription: "Iphone 17", orderDate: "2025-09-17" };

let customerOrderMap = new Map();

customerOrderMap.set(customer, order);

console.log(customerOrderMap.get(customer));
