//generics

// //guarantees that certain methods will be availble
// const names: Array<string> = [];

// //generic type promise.
// const promise: Promise<string>= new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('completed')
//   }, 2000)
// });

// promise.then(data => {
//   //same type as specified in the generic
// })

//using <T, U> are generic types and allow TS to infer the data type. Would be unable to access any properties from merged object created on line 22 would not work without using the generic.

//using extends allows any type of object. More specific than just using <T, U> which would allow different data types

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'jesse'}, {age: 38});
console.log('merged: ', mergedObj.name)

//generic example 2

interface Lengthy {
   length: number;
 }
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no Value. ';
  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' Element(s)';
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hi There'))

//using 'keyof' helps to guarantee that the key you are accessing is present. otherwise highlights the error in your invocation

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'jesse'}, 'name')

//generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data]
  }
}

//the generic defined in textStorage determines the type expected by the class
// const textStorage = new DataStorage<number>();
// const textStorage = new DataStorage<string | number>();
const textStorage = new DataStorage<string>();
textStorage.addItem('jesse');
textStorage.addItem('gert');
textStorage.removeItem('gert');
console.log(textStorage.getItems())

//generic utility types

//'partial' allows all of the properties in the interface to be optional
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['jesse', 'gerty'];
//unable to use because generic is readonly
// names.push('patty')
