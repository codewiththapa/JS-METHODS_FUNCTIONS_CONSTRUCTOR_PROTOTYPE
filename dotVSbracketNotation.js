// .(period) and dot notation  vs []bracket notation they are object property accessors . is used in static key while bracket is used in dynamic, spaces,specail characters..
//Note: . period notation is fast and easy to read while [] notation is slow and verbose while writing..

// using . period notation

let object = {country:'nepal', continent:'asia'};
    console.log(object.country);
// object[expression] bracket notation expects expression inside it
    console.log(object['continent']);

const entity = {grade:12,marks:80,student:"thapa", isPass:true};
    entity["hometwon"] = "butwal";
console.log(entity);

// [] brackets notation to access properties of objects 
//[] ;brackets for accessing index of arrays and strings

let strVal  = "   suman  ";
     console.log(strVal[7]);

//

const turncate = {"first name" : "magar kto" };
  console.log(turncate["firstname"]);

const modify = {course:'javascript'};
 const newObj = "course";
console.log(modify[newObj])

// Accessing object methods using  dot(.)  and []

let objMethod = {
  student :"suman",
  greet(){
    return `Hello ${this.student}`
  }
};
 
//using . period
  console.log(objMethod.greet());

// using [] brackets notation
  console.log(objMethod["greet"]());

let access = { 
  employee:"engineer", 
  job:function(){
    return `${this.employee} to make software`
  }
};
console.log(access.job());  //accessing methods using . period

console.log(access["job"]());  // accessing method of object using[]


// using variable to access object properties

let variable = {name:'hello dear'};
const proxy = "name";
console.log(variable[proxy]);   // dynamically;

//[] notation accessing property for spaces.

const spaces = {"last name" : "magar"};
// console.log(spaces.lastname);   // not valid
const valid = "last name";
  console.log(spaces[valid]);



  let array = String(["suman"]);
console.log(array.charCodeAt(3));
console.log(array.codePointAt(3),array.length);

let number = (123).toString();
console.log(number,typeof number);

console.log((0990).toString());

// nullish coalescing..

let nullish =  null ?? "i am a string";
console.log(nullish);

// truncating methods in array

let trun =  [12,3,,,,"suman",,];
let change = trun.splice(1,5);
console.log(trun,trun.length)
change.slice(3);
console.log(change,change.length);


let coalescing = [,,,,,,];
 coalescing.length =  5;
console.log(coalescing);

//type casting conversion(explicit conversion)
let emojis = "😁🙄";
 console.log(emojis.length);
let conversion =  Boolean(emojis);
console.log(conversion,conversion.length);

//array:collection of same data number of elements

let ele = [`suman , 😛, 😎 `];
console.log(ele,ele.length);

//toString() is a object method :> now in array
let toArray = [1,2,3,4,  "   suman"];
console.log(toArray.toString(),toArray.length,typeof toArray);

//toString () in object

let toObj = {name:'rita',age:30};
console.log(toObj.toString(),toObj.length,typeof toObj);

let explicit = "123";
  explicit = Number("12q3");
 console.log(explicit,typeof explicit);
explicit = Number(false);
 console.log(explicit,typeof explicit);
explicit = Number([1,2,,3,4]);
 console.log(explicit,typeof explicit);

console.log(parseInt("123.1398"))

let parse = "12.4224";
let convert = parseFloat(parse);
console.log(convert,typeof convert);

let int = "90.224";
let expli = parseInt(int);
console.log(expli,typeof expli);

let java = Number("120.932");
console.log(java,typeof java)

// number.toFixed1() to check the numbers after decimal
console.log(java.toFixed(10));

