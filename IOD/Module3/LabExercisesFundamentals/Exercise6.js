/*
a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
*/


const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', //a - last name
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },

    //b
    /*getCatchPhrase(person) {
        if (person.numFingers === 6) {
            return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
        } else 
            return 'Nice to meet you.';
    }*/

    //c
    getCatchPhrase: person => person.numFingers === 6 
        ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
        : "Nice to meet you."

};

inigo.greeting(westley) 
inigo.greeting(rugen)
