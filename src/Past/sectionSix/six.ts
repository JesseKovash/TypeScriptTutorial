//intersections

type Admin =  {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Jesse',
  privileges: ['create'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//type guards & function overloading

//lines 28,29,30,31 are function overloading. guarantees output of function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges)
  }
  if ('startDate' in emp) {
    console.log('StartDate: ' + emp.startDate)
  }
}

printEmployeeInformation(e1)

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck  {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10000)
  }
}

useVehicle(v1);
useVehicle(v2);

//discriminated unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed: ' + speed)
}

//Type Casting
//don't use in React. too similar to jsx
// const userInputElement = <HTMLInputElement>document.getElementById('user_input');

//option to use in React
const userInputElement = document.getElementById('user_input')! as HTMLInputElement;

userInputElement.value = 'Hi There'

//Index Properties: a generic template if the property names and number of properties are unknown
interface ErrorContainer {
  //index type. everything in the interface must conform to this type
  [prop: string]: string;
};

const errorBag: ErrorContainer = {
  email: 'Not a valid Email!',
  username: 'Must start with a capital character!'
};