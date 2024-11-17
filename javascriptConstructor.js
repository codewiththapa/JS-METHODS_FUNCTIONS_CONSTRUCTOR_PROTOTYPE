// constructor function

let construct = new Object([12,434,"suman"]);
console.log(construct,typeof construct);

let obj = new Object(123,23);
console.log(obj);

// Array();
console.log(Array(1,2,3,4));
console.log(Array("string","suman"));

let arr = new Array(1);
console.log(arr);

// constructor function: specail type of function to initilaize objects and creates objects

function Bio(name,age){   //constructor function :  Bio
  this.yourname = name;
  this.yourAge = age;
};

const invoke =  new Bio("suman",30);   // invoke: object instance 
console.log(invoke.yourname);
console.log(invoke.yourAge);
console.log(typeof Bio,typeof invoke);

// class constructor function

class Person {
  constructor(address,proffesion){
    this.yourAddress = address;
    this.yourProffesion = proffesion;
  }
};

const delimiter = new Person("Abu Dhabi","software enginner");
console.log(delimiter.yourAddress,delimiter.yourProffesion);
console.log(typeof Person,typeof delimiter);


// Object()  constructor to create object

let obj = new Object();
console.log(obj,typeof obj, obj.length);

// Function() constructor to create function 
let func = new Function();
console.log(func,typeof func,func.length);

// Array() constructor to create array object;
let arr = new Array(1);
console.log(arr,typeof arr,arr.length);

let again = Array(1);
console.log(again,typeof again,again.length);

// Function();
let create = new Function('a','b','return a+b');
console.log(create(2,2),typeof create,create.length);

//Date() constructor
let time = new String(Date());
console.log(time,typeof time);   // typeof: object

let clock = Date();     //without new
console.log(clock, typeof clock);   // typeof: string

// RegExp  regular expression constructor
let regex = new RegExp('^[a-zA-Z]+$');  
// Creates a regular expression object
console.log(regex,typeof regex);  // Output: /^[a-zA-Z]+$/

