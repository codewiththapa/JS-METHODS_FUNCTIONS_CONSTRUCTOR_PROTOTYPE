//  string primitive vs string object.
/* string can be create using : 1.string literal and 2.string constructor and 
  using 3.new keyword with String constructor function.    */
/*TEMPLATE LITERAL (STRING LITERAL) ES6: `` Bactics  and string interpolation ${}
NOTE: we can create string using "double quote" and 'single quote' and bactics``
Template literal : BACTICKS ` ` has many features in js. using bactics we dont need
escape characters  \n  for changing lines. so, bactics also use for multiline-string.
and also bactics are used for string-interpolation.
features of string interpolation ${2+2} to embed expressions and ${variables} in string. */

/* String() ,  Number() , Boolean() , Array() , Object() , Functon() :
they are also called constructor special type of function because using with new keyword
we can create instance of object type  */


//STRING PRIMITIVE ..string can be create  in 3 ways
//1. create string with string literal..
const literal = ' string literal ';
console.log(literal, typeof literal);

//2: Create string with String Type conversion(corecion)implicit
const coercion = String(123);
console.log(coercion, typeof coercion);

//3: using new constructor to create string object
const object = new String('hello string object');
console.log(object,typeof object);

let message = new String("hello");
console.log(message,typeof message);

// TEMPLATE LITERAL IN STRING;

let backticks = ` hello there
                   how are you.
                   i am fine . `
console.log(backticks);

let backticks = ` hello there
how are you.
i am fine .
what are you doing today.
i am doing nothing .`
console.log(backticks);

// special characters with escape sequence in string.

console.log("suman\nthapa\rnepal\'software".toUpperCase())

console.log(` ${1+2}
${2+4}`);

let another = new String("hello"); 
console.log(another, typeof another,another[2]);

// String() is a type conversion (wraps with objects) after finsih discarded  String() is a constructor because also can use with new keyword

let construct = new String(1234);
console.log(construct,typeof construct,construct.length);

// String() constructor is a special type of function to create and intilaize objects

let create =  new String(123);
console.log(create,typeof create,create.length,create[2]);

// Implicit type conversion(type coercion)
console.log("5"-2);
console.log("5"+2);

let arr = Array(1,2,3);
console.log(arr,typeof arr);

arr = new Array(900,23,566);
console.log(arr,typeof arr);

