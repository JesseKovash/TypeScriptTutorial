interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named  {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named{
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;
  constructor(n: string, age: number) {
    if (n) {
      this.name = n;
    }
    this.age = age
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi')
    }
  }

}

let user1 = new Person('Jesse', 38);
console.log(user1)

user1.greet('hello')