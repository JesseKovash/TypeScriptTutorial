//Decorators
  //run when class definition is defined. A decorator receives at least one argument which is the target class
  //The creation of the decorator functions runs top to bottom as normal. The decorator invocations (@....) run from the bottom of the file towards the top.

//Single Decorator
// function Logger(constructor: Function) {
//   console.log('logging');
//   console.log(constructor);
// }

// @Logger


//decorator factory
  //the first argument is supplied by the @Logger call, the second is default value
  function Logger(logString: string) {
    return function(constructor: Function) {
      // console.log(logString);
      // console.log(constructor);
    }
  }

  //can use _ to show that you are aware of the argument, but won't use it
  function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
      }
    }
  }

  @WithTemplate('<h1>My Person Object<h1>', 'app')
  @Logger('Logging-Person')

  class Person {
    name = 'Jesse';
    constructor() {
      // console.log('Creating person object');
    }
  }

  const pers = new Person();

  //adding decorators to a class as a property (Log)
    //receive two arguments: target of the property(prototype or constructor), propertyname
    //executes when class is defined
  //adding accessor decorator (Log2)
    //  receives args: target, name, and descriptor
  //adding decorators to a class as a method (Log3)
    //  receives args: target, name, and descriptor
  // decorator to parameters
    //receives args: targets, name of method where param is used, position of arg (# 1 indexed)

  function Log(target: any, propertyName: string | symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
  }

  function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log4(target: any, name: string, position: number) {
    console.log('param decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
  }
  class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('invalid price: should be positive')
      }
    }

    constructor(t: string, p:number) {
      this.title = t;
      this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax)
    }

  }

  //all decorators run when the class is defined!!!!!!