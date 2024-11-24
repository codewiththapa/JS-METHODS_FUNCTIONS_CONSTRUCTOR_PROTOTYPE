//WHAT IS THE DIFFERENCE BETWEEN __porto__  vs  prototype

// It is not part of the official ECMAScript specification. Historically, __proto__ was an implementation detail of certain JavaScript engines (such as SpiderMonkey and V8). It was not intended to be accessed directly, and in fact, in the early versions of JavaScript, the prototype mechanism was not exposed as part of the public API.
// However, many modern browsers and JavaScript engines added support for it, and it became widely used by developers, though it was not part of the original ECMAScript standard.
// The use of double underscores (__) is why it’s called "dunder."
// Why is it not recommended to use __proto__ directly?

// The direct use of __proto__ can lead to confusing and difficult-to-maintain code. The prototype chain should be managed more abstractly, usually through Object.create() or using Object.setPrototypeOf() to avoid confusion.
// Modern JavaScript recommends using methods like Object.getPrototypeOf() and Object.setPrototypeOf() instead of directly interacting with __proto__.


//NOTE: __proto__ will not create instance of Object

let cat = {breed:"Dhadey"};
let myCat = {name:"surii"};
Object.setPrototypeOf(myCat,cat);

console.log(myCat.breed);

myCat.__proto__   // output: {breed:'Dhadey'};
cat.__proto__    //  output: null

cat.tailLength = "8cm";
myCat.__proto__   // now tailength will be added.


//Now using prototype:

function Dog(){};
Dog.prototype.breed = "Bhotey kukur";

const myDoggie = new Dog ();
console.log(myDoggie.breed);

console.log(myDoggie.__proto__);
console.log(Dog.prototype);

//Now: check the difference between function __proto__ and object  __proto__ 
function Giraffe(){}
console.log(Giraffe.prototype);   // output: {}

let bird = {};
console.log(bird.prototype);   // not valid for object 
//output: undefined ... because note that :object  do not have prototype

console.log(bird.__proto__);  // valid
// NOTE: OBJECT  has  __proto__ 


// Difference between __proto__  vs prototype:

// first:creating constructor function "Student";
function Student(name,age){
  //this = {}
  this.name;
  this.age;
};

// constructor function "Student" has prototype property

//Now invokeing constructor function using new keyword and creating object..
// stdnt1 now is  a object creating from constructor function "Student"..
const stdnt1 = new Student("thapa",30);
const stdnt2 = new Student(" suman thapa magar", 32);
// stdnt1 has __proto__ property.

// Lets check constructor function internal prototype vs object internal prototype property:

console.log(Student.prototype === stdnt1.__proto__); //true

// Now adding prototype internal property to the Student constructor function so that other instance of object can access its properties and methods:

Student.prototype.getName = function(){return this.name};

//Function call using object:
stdnt1.getName();




// Student constructor function
function Student (name,age){
  this.name = name;
  this.age = age;
};

// creating object instance through new keyword of constructor function
// stdnt : object instance
const stdnt = new Student("suman",30);

// creating method using prototype property of constructor function:
Student.prototype.getName = function(){return this.name};

// Accessing the properties of constructor function by object instamce.
console.log(stdnt.name);
console.log(stdnt.age);
stdnt.getName();

// NOW CHECKING THE constructor function prototype  vs Object instance __proto__

// dunder  __proto__ (object) === prototype (function);
console.log(stdnt.__proto__=== Student.prototype);  // true

console.log(stdnt.__proto__.getName === Student.prototype.getName);   // true







