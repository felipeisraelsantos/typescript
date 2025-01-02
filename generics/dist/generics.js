"use strict";
class Generica {
    constructor(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
}
const ex1 = new Generica('string_value');
console.log(ex1);
const ex2 = new Generica(21123);
console.log(ex2.getValue());
