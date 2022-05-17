"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, age) {
        if (n) {
            this.name = n;
        }
        this.age = age;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1 = new Person('Jesse', 38);
console.log(user1);
user1.greet('hello');
