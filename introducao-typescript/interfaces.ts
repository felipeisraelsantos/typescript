interface UserInterface {
    firstName: string;
    readonly lastName?: string;
    age: number;

    getFullName(): string;
}

const getUser = (user: UserInterface): string => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
}

class Person implements UserInterface {
    firstName: string;
    readonly lastName?: string;
    age: number;

    constructor(firstN: string, lastN: string, ageU: number) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
let person = new Person('Fulano', 'Detal', 30)
console.log(getUser(person))
