// In JavaScript, prototypes are a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal property called [[Prototype]], which is a reference to another object. This object serves as the prototype for the object, and any properties or methods not found directly on the object are looked up on its prototype.

// A prototype is essentially a blueprint or template for an object. When a method or property is accessed on an object, JavaScript first checks if the property exists on the object itself. If it doesn't, it checks the prototype of that object, and if not found, it checks the prototype's prototype, and so on, until it reaches the end of the prototype chain (which is null).

// Each function in JavaScript, whether it’s a built-in function or a custom function, has a prototype property. This prototype property is an object, and it is used to add properties and methods to the instances of a function.


// Purpose of Prototypes
// Inheritance: Prototypes enable inheritance. Objects can inherit properties and methods from other objects.
// Memory Efficiency: Methods and properties can be shared among all instances of an object. For example, instead of creating a new method for every instance of an object, you can add the method to the prototype, saving memory.
// Extensibility: Prototypes allow JavaScript to be extensible. You can dynamically add methods and properties to existing objects.


// PROTOTYPE IS A OBJECT PROPERTY INTERNAL HIDDEN PROPERTY ,FROM WHICH INHERITANCE IS ENABLED TO SHARE PROPERTIES AND METHOD FROM ONE OBJECT TO ANOTOHER..

Array.prototype.customMethod = function () {
  console.log(`this 
           is
           a
           custom Prototype`);
};

let arr = ["custom prototype ", "built in prototype"];
arr.customMethod();

//
Object.defineProperty(Array.prototype, "customMethodIs", {
  value: function () {
    console.log("CUSTOOM ARRAY PROTOTYPE");
  },
  enumerable: false,
  writable: true,
  configurable: false
});
let array = [1, 2, 3];
array.customMethodIs();

// prototype enables inheritance in j.s
//[[Prototype]] is a internal property of javascript which forms a prototype chain in objects

// creating a js Object person
const person = {
  name: "javascript",
  greet() {
    console.log(`Hello my name is , ${this.name}`);
  }
};

// creating new object that inherites properties from person object:

const newPerson = Object.create(person);
newPerson.name = "thapa";   // overriding name property
newPerson.greet();

//  NOTE: Even though [[prototype]] is internal property of object we cannot access it directly so we need .__proto__

const dog = {
  breed: "labrador",
  bark() {
    console.log("woof!");
  }
};

const myDog = Object.create(dog);
console.log(myDog.__proto__);
console.log(myDog.__proto__.breed);
myDog.bark();
myDog.name = "Bhotey kukur";

// Object.assign();

const source = { a: 1, b: 2 };
const target = { b: 4, c: 5 };
const returnTarget = Object.assign(target, source);
console.log(target);

console.log(returnTarget === target);
//
const target2 = { a: 1, b: 2 };
const source2 = { b: 4, c: 5 };

const returnedTarget2 = Object.assign(target2, source2);

console.log(target2);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget2 === target2);
// Expected output: true

//Note: we can set prototype from one object to another object using .__proto__ to give access to properties and methods of objects
let a = {
  name2: "docker", language: 'typescript',
  run: () => { alert(" self run") }
};   // this run overrides
console.log(a);

let p = { run: () => { alert("run") } };
p.__proto__ = { name: "web3" }
a.__proto__ = p
a.run();
console.log(a.name);


// 
let obj = {};
let obj2 = new Object();
console.log(obj, obj2);

console.log(obj.__proto__ === Object.prototype); //true

console.log(obj.__proto__.toString === Object.prototype.toString);  //true

console.log(obj.toString === obj2.__proto__.toString); //true

console.log(Object.__proto__ === Object.prototype); //false

console.log(Object.prototype.__proto__);  //null
console.log(Object.__proto__);  // {}


// for Function...
let x = Function();
console.log(x.__proto__ === Function.prototype);
console.log(x.__proto__.__proto__ === Object.prototype);
console.log(x.typeof === Function.prototype.typeof);


// we write code in codebase:
let arr = [1, 2, 3];

//internally by js engine code will be executed using constructor:
let arr1 = new Array([1, 2, 3]);

console.log(arr);
console.log(arr1);

//inherits from Array.prototype
console.log(arr.__proto__ === Array.prototype);  //true

// now form Object.prototype;
console.log(arr.__proto__.__proto__ === Object.prototype); //true;

// now from the top ;
console.log(arr.__proto__.__proto__.__proto__ === Object.prototype.__proto__);  //true

console.log(arr.__proto__.__proto__.__proto__);
console.log(Object.prototype.__proto__);

//
function f() { };
console.log(f.__proto__ === Function.prototype);

// true,  inherits from objects
console.log(f.__proto__.__proto__ === Object.prototype);


//  for string 
let x = "is String";
console.log(x.__proto__ === String.prototype);
console.log(x.__proto__.__proto__ === Object.prototype);
console.log(x.__proto__.__proto__.__proto__ === null);

console.log(x.valueOf === String.prototype.valueOf);
console.log(x.toUpperCase === String.prototype.toUpperCase);
console.log(x.toLowerCase === String.prototype.toLowerCase);
console.log(x.concat === String.prototype.concat);
console.log(x.toUpperCase === String.prototype.toUpperCase);


console.log(String.prototype.__proto__.__proto__ === null);


//for number

let num = 1;
console.log(num.__proto__ === Number.prototype);
console.log(num.indexOf === Number.indexOf)
console.log(num.indexOf === Number.__proto__indexOf);
console.log(num.__proto__.indexOf === Number.indexOf);
console.log(num.typeof === Number.typeof);


//NOTE: IN JS DELEGATION MEANS: PROTOTYPE IS LIKE DELEGATION SHARE POWERS OF ONE OBJECT TO ANOTHER, OR ALSO WE CAN SAY SHARES RESPONSIBILITIES OR ASSIGN DUTIES..

// polyfill  for   Object.setPrototypeOf()

// Object.setPrototypeOf()
let cat = { breed: "Dhadey" };
let myCat = { name: "surii" };
Object.setPrototypeOf(myCat, cat);
console.log(myCat.name);
console.log(myCat["name"]);
console.log(myCat["breed"]);


//Object.create();
let x = { name: "suman", grade: "masters" };
let y = Object.create(x);
console.log(y);
console.log(y.grade);
console.log(y.name);
console.log(y instanceof Object);  // true
console.log(typeof y, typeof x);  // object object

// javascript everything is an object..

// code we write in IDE ..
let number = 0;

// but javascript engine will internally wrapp it into Number object , wrapper objet to give access 

let number = new Number();


// setting prototype 
function Animal(name) {
  this.name = name;
};

// Adding the method to the prototype of Animal.

Animal.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.name}`)
};

const dog = new Animal("buddy");
dog.sayHello();

// syntax:Object.setPrototypeOf(object,prototype) = [[prototype]] internally;

let food = { typesofFood: "italian food" };
let itallian = { foodName: "manchurin" };
let set = Object.setPrototypeOf(food, itallian);

console.log(set.typesofFood, set.foodName,);


// Object.create();
let create = { course: "javascript" };
let pro = Object.create(create);
console.log(pro.course);   // javascript

// setting prototype:

//constructor function
function Car(model) {
  this.model = model;
};

//setting method using prototype  to constructor function
Car.prototype.drive = function () {
  console.log(`i love to drive ${this.model} car`);
};

const carModel = new Car("Lexus");
carModel.drive();


// Object.assign()
let x = { name: "suman", caste: "thapa" };
let y = { address: "butwal", profession: "Fullstack" };
let z = Object.assign(x, y);

console.log(z);
console.log(z === x);
console.log(y === z);

















