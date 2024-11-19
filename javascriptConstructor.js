// In JavaScript, constructors are typically written as regular functions. When they are invoked with the new keyword, they act as constructors.


// wrapper object is not a type conversion in javascript..

//Type conversion.. implicitly(corecion=forcefully)... Type casting conversion(explicitly)  data types conversion

// Type conversion explicitly..  Number() , String()  , Boolean().

//constructor(Built-in) is just like a normal function..
// WHAT differntiate constructor from a normal function ..Constructor naming convention in js is upperCase which make differnce from normal function or regular function from constructor...

// Constructor is especially for complex Objects in js . Constructor provides features to access properties and methods.

//NOTE: PRIMITIVE TYPES DOESNOT HAVE properties and methods like Objects... REMENBER ONLY OBJECTS HAS PROPERTIES AND METHODS IN JAVASCRIPT ....PRIMITIVES VALUES DOESNOT HAVE ...BUT IT DEPENDS UPON..SO IN THIS CASE CONSTRUCTOR IS VERY USEFUL ..

//WHAT IS WRAPPER OBJECTS?   WRAPPER OBJECTS ARE SPECIAL TYPES OF OBJECTS WHICH GIVES ACCESS OF PRIMITIVE VALUES (STRING,NUMBER AND BOOLEAN) TO PRIMITIVE VALUES BECAUSE PRIMITIVE VALUES THEY DONT HAVE THEIR OWN  METHODS AND PROPERTIES.

// WHY IT IS CALLED A WRAPPER OBJECT? ... BECAUSE WRAPPER OBJECT WRAPS PRIMITIVE VALUES INSIDE IT TO MAKE IT LIKE A OBJET TYPE SO THAT WE CAN GET TO ACCESS PROPERTIES AND METHODS OF JS .. AND AFTER USING IT WRAPPER OBJECT WILL DISCARD AUTOMATICALLY FROM OBJECT TYPES AND RETURN PRIMITIVE VALUES..

// WRAPPER OBJECT: 2 TYPES .... 1.IMPLICIT WRAPPER OBJECT   2. EXPLICIT WRAPPER OBJECT

//1: implict wrapper object;  This is implicit wrapper Object because  variable x get access of method toUpperCase() ;  how?   we know  x is a normal "suman" string primitive value which they dont have their own methods and properties , but in js progarmming .js engine will internaly wrap string value "suman" and convert it into String() object for a whlile to give access to methods and it will return primitive value and dicard the Object . Implicit wrapper object will not return object type value . 
let x = "suman";
console.log(x.toUpperCase(), x instanceof Object , x instanceof String);

//2: Explicit wrapper Object  in 2 ways:


//1: Explicit wrapper Object using Constructor... this is explicit wrapper using String primitive crossponding String() constructor..but still it is not a instanceof Object , because we didnt use new keyword and this String() constructor will return  "string" primitive value..
  let y = String(12);
  console.log(y,y.length, y instanceof Object);  // false

// 2: second way to create Explicit wrapper Object ... HERE z variable is a explicit wrapper object and z is instanceof Object because here new keyword is used with Number primitives for Number() and in js "new" operator will invoke the constructor function and creates object instance here it will return object type output which will not be discarded...

   let z = new Number(true);
console.log(z, z instanceof Object , z instanceof Number, z.valueOf());
//
console.log( x === y);  // false
console.log( y === z);  // false

//

let a = new Boolean(0);
console.log(a , a instanceof Boolean , a.toString());

//

console.log(z === a);



//PRIMITIVE TYPES AND THEIR CORRESPONDING CONSTRUCTOR ..
//1:  String() constructor for string primitives "string";
//2: Number()  constructor for number primitives 1,2,3;
//3:  Boolean()  constructor for Boolean primitives yes,no true,false


// Purpose of Constructors in JavaScript
// The primary purpose of constructors in JavaScript is to provide a way to create and initialize objects. Specifically, they are used for:

// Object Creation: Constructors allow you to create multiple objects with the same structure (i.e., properties and methods) without having to manually define each object.
// Encapsulation: Constructors enable you to encapsulate logic inside an object. For instance, you can define functions (methods) inside constructors to operate on the object's properties.
// Inheritance: Using prototype-based inheritance, constructors help objects inherit properties and methods from other objects or constructor functions.
// Code Reusability: By using constructors, you avoid repetitive code. Instead of manually creating each object with the same structure, you can reuse the same constructor function to generate many similar objects.


// ES6 Classes: In modern JavaScript (ES6 and beyond), constructors are used inside classes to initialize object properties, offering a more structured and syntactically cleaner approach to object-oriented programming.




// Constructor Functions: Functions like String, Number, Object, Array, Boolean, Date, Function, and RegExp are all constructor functions in JavaScript.
// Behavior with and without new:
// When used without new, these constructors behave like conversion functions or object wrappers (returning primitive values or wrapped objects).
// When used with new, they create new objects (like a String object, Number object, Array object, etc.).
// Can we call them constructor functions?: Yes, they are constructor functions. The new keyword is optional when calling these functions, but they will behave as constructors when used with new (creating new instances).
// Conclusion
// These functions can be called constructor functions even without the new keyword, but their behavior changes. Without new, they often return primitive values or wrapped objects, and with new, they return actual object instances.
// JavaScript provides flexibility in how these constructor functions are invoked, and understanding the distinction can help prevent confusion when using them in your code.

//CONSTRUCTOR FUNCTION  WITHOUT  "new"  KEYWORD  :  returns primitive  value (data)
//CONSTRUCTOR FUNCTION  WITH  "new"   keyword:  returns actual  object  instances.

// OBJECT   CONSTRUCTOR  VS  CONSTRUCTOR FUNCTION..

// 	Object Constructor (Object())	:	1)Creates a simple object or wraps a primitive value into an object.
//2)When you need a simple object or want to wrap primitive values.
//3) without "new"  keyword...     let obj = Object('hello');


let obj = {}; console.log(obj,typeof obj);
let obj2 = Object(); console.log(obj2,typeof obj2);


let func = function(){} ; console.log(func,typeof func);
let func2 = Function(); console.log(func2,typeof func2);

let str = "123"; console.log(str,typeof str);
let str2 = String(123); console.log(str2,typeof str2);

// the above code all are equivalent to each other just a different way of writing



// Function Constructor (Custom Constructor):When you need multiple instances of an object with custom properties and methods....Should be called with new to create instances of a custom object  ..  let car = new Car('Toyota', 'Corolla');


// Both the Object() constructor and function constructors are important tools in JavaScript. The Object() constructor is typically used for basic object creation or wrapping, while function constructors are more useful for creating complex objects with shared properties and methods.


// You're right to some extent, but there are nuances that differentiate Object constructor from global built-in functions in JavaScript. Let's break it down for clarity.

// Is the Object() Constructor the Same as a Global Built-in Function?
// In JavaScript, the Object constructor is indeed a built-in function, and it can be used to create objects. However, not all global functions are constructors.

// The Object constructor is a special type of function that is designed to create instances of the Object type.

// In general, JavaScript has both constructors and normal functions, and the distinction lies in how they are intended to be used. Let’s break it down:

// What Makes the Object Constructor Special?
// The Object constructor is both a global built-in function and a constructor function:

// Global Built-in Function: In JavaScript, Object is a global function (it's built into the language). You can call Object() directly without needing any object or class to reference it.
// Constructor: When used with the new keyword, Object() acts as a constructor, creating a new object (or wrapping a primitive value in an object).
// javascript
// Copy code


// Conclusion: Object Constructor and Global Built-in Functions
// Object() Constructor is a global built-in function in JavaScript that can be called as a normal function or as a constructor (with new).
// Global Built-in Functions are a broad category, and constructors are a specific type of global function. Some of the global functions like Object(), Array(), and Date() are constructors, meaning they are intended to create objects when used with the new keyword.
// So, while the Object() constructor is a global built-in function, not all global built-in functions are constructors. Some are simply utility functions (like parseInt() or Math.max()) that don't create objects. In other words, the term "constructor" refers to a specific role that a function serves (creating new instances of an object), not just its position in the global scope.

// Summary:
// Object constructor is both a global built-in function and a constructor function. When called with new, it creates an empty object, and without new, it can be used to wrap a primitive value into an object.
// Global built-in functions can be both constructors (like Object(), Array(), Date()) and regular functions (like parseInt(), Math.max()).
// Constructors are a special subset of functions in JavaScript that create objects, and they are typically used with new to create instances.





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


let str = Object(1223);
console.log(str,str instanceof Number)
