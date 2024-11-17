// instanceof checks the prototype chain, and for primitive values (like strings, numbers, booleans), it will return false unless they are specifically wrapped in their object forms (new String(), new Number(), etc.).
// The result of using String(), Number(), and other constructors is a primitive value, not an object, unless explicitly wrapped in an object form.


let str = Object(1223);
console.log(str,str instanceof Number,typeof str);

// "instamceof" operator in javascript checks whether the object is instance of any specific type of (class,constructor function or prototype chain):

//using String() constructor
let obj = String(12);
// here instanceof String will return false cz we didnot use new keyword with String() constructor so which will return the primitive string in result so  instanceof String will be "false" here.
console.log(obj,obj instanceof String,typeof obj);  //output:'false'


// HERE CREATING String() constructor with new keyword which will wrapps up string passing primitive value as a object type. so hence we will get   instanceof String  is  "true"  here because of using "new".
let obj2 = new String(12);
console.log(obj2,obj2 instanceof String,typeof obj2);

// Boolean constructor 
let boo = Boolean(123);
console.log(boo, boo instanceof Boolean,typeof boo);

// using   function constructor "new";
let boo2 = new Boolean(123);
console.log(boo2, boo2 instanceof Boolean,typeof boo2);

//Array() constructor
let arr = Array("suman","thapa");
console.log(arr, arr instanceof Object, arr instanceof Object, typeof arr,  arr instanceof String, arr.length);

// Function constructor
let func = Function(112);
console.log(func, func instanceof Function, func instanceof Object,typeof func);

// String() constructor without new 
  let web  =  String(123,false);
console.log(web, web instanceof String, typeof web);

// now using new in string COnstructor
  let web3  = new String(123,false);
console.log(web3, web3 instanceof String, typeof web3, web3 instanceof Object, web3 instanceof Array);