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
