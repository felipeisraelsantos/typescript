"use strict";
const getUser = (user) => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};
class Person {
    constructor(firstN, lastN, ageU) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('Fulano', 'Detal', 30);
console.log(getUser(person));
