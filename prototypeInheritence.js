// In JavaScript, prototypes are a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal property called [[Prototype]], which is a reference to another object. This object serves as the prototype for the object, and any properties or methods not found directly on the object are looked up on its prototype.

// A prototype is essentially a blueprint or template for an object. When a method or property is accessed on an object, JavaScript first checks if the property exists on the object itself. If it doesn't, it checks the prototype of that object, and if not found, it checks the prototype's prototype, and so on, until it reaches the end of the prototype chain (which is null).

// Each function in JavaScript, whether it’s a built-in function or a custom function, has a prototype property. This prototype property is an object, and it is used to add properties and methods to the instances of a function.


// Purpose of Prototypes
// Inheritance: Prototypes enable inheritance. Objects can inherit properties and methods from other objects.
// Memory Efficiency: Methods and properties can be shared among all instances of an object. For example, instead of creating a new method for every instance of an object, you can add the method to the prototype, saving memory.
// Extensibility: Prototypes allow JavaScript to be extensible. You can dynamically add methods and properties to existing objects.


// PROTOTYPE IS A OBJECT PROPERTY INTERNAL HIDDEN PROPERTY ,FROM WHICH INHERITANCE IS ENABLED TO SHARE PROPERTIES AND METHOD FROM ONE OBJECT TO ANOTOHER..

Array.prototype.customMethod = function(){
  console.log(`this 
           is
           a
           custom Prototype`);
};

let arr = ["custom prototype ","built in prototype"];
arr.customMethod();

//
Object.defineProperty(Array.prototype,"customMethodIs",{
      value: function(){
    console.log("CUSTOOM ARRAY PROTOTYPE");
},
  enumerable:false,
    writable:true,
      configurable:false
});
 let array = [1,2,3];
 array.customMethodIs();

// prototype enables inheritance in j.s
//[[Prototype]] is a internal property of javascript which forms a prototype chain in objects

// creating a js Object person
const person = {
  name:"javascript",
  greet(){
    console.log(`Hello my name is , ${this.name}`);
  }
};

// creating new object that inherites properties from person object:

const newPerson  = Object.create(person);
newPerson.name = "thapa";   // overriding name property
newPerson.greet();

//  NOTE: Even though [[prototype]] is internal property of object we cannot access it directly so we need .__proto__

const dog = {
  breed:"labrador",
  bark (){
    console.log("woof!");
  }
};

const myDog = Object.create(dog);
console.log(myDog.__proto__);
console.log(myDog.__proto__.breed);
myDog.bark();
myDog.name = "Bhotey kukur";

// Object.assign();

const source = {a:1, b:2};
const target = {b:4, c:5};
const returnTarget = Object.assign(target,source);
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
let a = { name2:"docker",language:'typescript',
  run:()=>{alert(" self run")}};   // this run overrides
console.log(a);

let p = {run:()=>{alert("run")}};
p.__proto__ = {name:"web3"}
a.__proto__ = p
a.run();
console.log(a.name);



