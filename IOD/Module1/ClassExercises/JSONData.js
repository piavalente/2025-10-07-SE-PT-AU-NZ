let userData = {
    "firstName" : "Sammy", //one value
    "lastName" : "Shark",
    "age" : 25,
    "followers" : 1000,
}

//array is best used to store similar variables

let userInfo = [ //this is an array
    {firstName: "Sammy", lastName: "Shark", age: 25, followers: 1000 },
    {firstName: "Bruce", lastName: "Lee", age: 40, followers: 2000 },
    {firstName: "William", lastName: "Shakespear", age: 40, followers: 3000 }
]
console.log(userData.favouritebook.author)

let book = {
    "Author" : "William Shakespear",
    "Published date" : "1950",
    "Company" : "XYZ"
}

console.log(book.Author)
book["Published date"] = "1930"

book.country = "England" //asign the value to the key that you wish to

console.log(userData.firstName)
console.log(userData.lastName)
console.log(userData.age)
console.log(userData.followers)

userData.followers = 1200 //this to assign data 
userData["age"] = 30 //or this

console.log(userData)