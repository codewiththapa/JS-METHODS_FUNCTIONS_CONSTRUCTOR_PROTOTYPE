// What is OBJECT CONSTRUCTOR ()  
// WHAT IS GLOBAL BUILT IN FUNCTION ? 
// DIFFERENCES BETWEEN OBJECT CONSTRUCTOR ()    /VS/  GLOBAL BUILT IN FUNCTION ?
// WHAT IS FUNCTION CONSTRUCTOR(CUSTOM CONSTRUCTOR) ?

//  OBJECT CONSTRUCTOR ()    /VS/    FUNCTION CONSTRUCTOR(CUSTOM CONSTRUCTOR) 


// we can create object using 3 methods:
let a = {};   //object literal
let b = Object();  // Object constructor
let c = new Object // function constructor
console.log(a,b,c)


// Using Object constructor:
let marks = Object();  //{}
marks["Suman"] = 90;
marks["thapa"] =95;
console.log(marks);

// usining Array constructor();
let x = [];
let y = Array();
let z = new Array();
console.log(x,y,z);
 console.log(typeof x, typeof y, typeof z);

//using Function constructor();
let d = function (){};
let e = Function();
let f = new Function();
 console.log(d,e,f);
 console.log(typeof d, typeof e, typeof f);
 console.log( d instanceof Function);
  console.log( e instanceof Function);
 console.log( f instanceof Object);

//  Object () constructor
let food = Object()
food ["apple"] = "Rs.200";
food ["orange"] = "Rs.100";
console.log(food);

// Array constructor ()
let books = new Array();
books[0]= "Eloquent javascript";
books[1] ="Bhagvat Gita";
books[4] = 123.13
console.log(books, books instanceof Array);



// Why Use the Function Constructor?
// While the Function constructor is useful for dynamically creating functions at runtime, it is generally not recommended for most use cases because:

// Security Risks: Using the Function constructor is similar to using eval(). If you are constructing functions from untrusted sources (e.g., user input), you could introduce security vulnerabilities.
// Performance: Dynamically created functions are not as optimized by JavaScript engines as statically defined functions.
// Readability and Maintainability: Code that uses the Function constructor can be harder to read and maintain, especially if the function body is large or complex.

//It has the syntax new Function(arg1, arg2, ..., functionBody).


