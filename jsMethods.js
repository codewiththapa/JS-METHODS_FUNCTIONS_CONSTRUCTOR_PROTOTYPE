// methdos(): which performs operation on js data, need objects and instances..  All the given code down below  are methods() String object because js internally wraps with object prototype built in object methods which performs operation on given string ,after the operation object will be discarded... Therefore they are not called Functions or global functions because they need any instances or objects to perform the operation so they all the called  methods().
//ON THE OTHER HAND FOR GLOBAL BUILT IN FUNCTION WE DONT NEED ANY INSTANCES ..WE CAN CALL DIRECTLY ON CONSOLE.

console.log("SUMAN".toLowerCase());
console.log((123).toString());
console.log("SUMAN".charAt(3));
console.log(("SUMAN")[1]);
console.log("SUMAN".concat("thapa").toUpperCase());
console.log("SUMAN".charCodeAt(3));
console.log("SUMAN".at(0));

// indexOf(substring) returns index number,if not found returns -1
console.log("SUMAN,thapa".indexOf("thapa"));

// includes(substring)  returns boolean value
console.log("SUMAN,thapa,magar".includes("magar"));
console.log("SUMAN,thapa,magar".includes("suman"));

// lastIndexOf(substring) returns the last index, if not found returns  -1
console.log("SUMAN,thapa,magar".lastIndexOf("magar"));

// replace(search value, replace value);
console.log("hello, world".replace("world","there"));

// trim()  , trimRight()  , trimLeft();
console.log("    SUMAN  thapa  magar   ".trim());
console.log("    SUMAN  thapa  magar   ".trimRight());
console.log("    SUMAN  thapa  magar   ".trimLeft());

// slice(startIndex, EndIndex);

console.log("    SUMAN  ,thapa , magar   ".slice(5,10));
console.log("    SUMAN  ,thapa , magar   ".slice(8));

//split(separator);  returns the string into array
console.log("    SUMAN  ,thapa , magar   ".split(","));
console.log("    SUMAN  ,thapa , magar   ".split(""));
console.log("    SUMAN  ,thapa , magar   ".split(""));








//Function are executed before the result is used in the rest of the expression

function sum (a,b){
  return a + b;
};
let result  = sum(10,5) *2
console.log(result);

//functions with side effects

let x = 12;

function effect (){
  x += 5;
  console.log(x);    //17
  return x;
};
let output = effect () + 10;
console.log(output);  //27
console.log(x);    //17

// () parenthiese(singular)   parentheses(plular); for grouping expression
let add = 5*(2-1);
console.log(add);
    add = 5*2-1;
    console.log(add);

//comma opertor for grouping large statement in a single parenthieses

let group = (1,2,"suman",3,{name:"suman",age:30});
   console.log(group);
 group = (`1+2+suman+3+{name:"suman",age:30}`);

// + string operator used to concatenate in string data values

let concat  = "suman" + "number";
  console.log(concat);
  concat = 12 + 12;
  console.log(concat);

// comma operator 
let  comma = [1,2,3,4];
console.log(comma,typeof comma);
      comma = (1,2,3,4);
   console.log(comma,typeof comma);

// expression as arguments in functions

function hello(a,b){
  return (a*b)+(a+1);
};
  let otp = hello(2+2,3-1);
   console.log(otp);

// nested function call

function first(x,y){
  return x+y;
};

function second(a,b){
  return a*b;
};

let gotValue = first(2,second(2*3,2+2))
   console.log(gotValue);