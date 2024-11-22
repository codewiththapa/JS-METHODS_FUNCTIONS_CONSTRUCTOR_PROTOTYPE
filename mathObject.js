
// Math is Object in javascript and it has different types of methods  
console.log(parseInt(Math.PI));
console.log(parseFloat(Math.PI));

// Math Object function
//1. floor()  function... MAth object;
console.log(Math.floor(990.8090998));

// ceil()  ...Math function..
console.log(Math.ceil(3231.935));

// round()  function;
console.log(Math.round(354.097));
console.log(Math.round(967.988));

// random() result number between 0 and 1..    Math function;   
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random()*2);
console.log(Math.random()*3);

console.log(Math.floor(Math.random()*4));

// now.. real use of Math.random();
   const choose = ["pizza","momo","burger"];

let selecting = Math.floor(Math.random()*3);
console.log(choose[selecting]);

 selecting = Math.floor(Math.random()*3);
console.log(choose[selecting]);

selecting = Math.floor(Math.random()*3);
console.log(choose[selecting]);

selecting = Math.floor(Math.random()*3);
console.log(choose[selecting]);



