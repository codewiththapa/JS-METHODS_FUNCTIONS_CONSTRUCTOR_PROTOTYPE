// COnstructor function creating the complex object


// The difference of constructor function with new or without new keyword is;

// in this function we didnot use "new" so we have to create object  explicitly inside function and retrun
function createStudent(firstName,lastName){
  let student = {
    firstName:firstName,
      lastName:lastName,
        getFullName: function(){
          console.log(`${this.firstName} ${this.lastName}`)
        }
     };
    return student;
};

let student1 = createStudent("suman","thapa");
console.log(student1);
student1.getFullName();

// constructor function using "new" keyword..
//How "this" and "new" keyword are related..


// here in this constructor function we use "new" keyword so  we do not need to create object explicitly ..
//because of new keyword javascript will internally create this as a object  this= {}  and return implictly this .

function studentData(studentFaculaty,studentName){
  // this = {}  here internally "this" object will create
  this.studentFaculaty = studentFaculaty;
  this.studentName = studentName;
  this.getData = function(){
    console.log(`${this.studentFaculaty} ,${this.studentName}`)
  };
  // return this;  from here this will return
};
 let loadingData = new studentData("FullStack","suman");
console.log(loadingData);
loadingData.getData();

