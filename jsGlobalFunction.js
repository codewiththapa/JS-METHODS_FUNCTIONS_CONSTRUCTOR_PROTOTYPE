//Global built in function : which is independent dont need any objects or instances to call upon.

// DIFFERENCE BETWEEN BUILT IN GLOBAL FUNCTION IN JAVASCRIPT: THEY ARE PRE-DEFINED FUNCTION IN JS .THESE FUNCTIONS ARE PROVIDED BY JAVASCRIPT .THEY ARE PROVIDED IN ALL BROWSERS ENVIRONMENT IN NODE.JS
// THESE FUNCTIONS CAN BE CALLED WITHOUT ANY OBJECT CONTEXT(I.E. THAT IS THEY ARE NOT A METHODS TO ANY SPECIFIC OBJECTS BUT GLOBAL FUNCTION)

console.log(String(12));
console.log(Boolean("suman"));
console.log(Number("suman"));
console.log(isNaN("suman"));
console.log(isNaN(123));
console.log(Object(123));
console.log(Object("suman"));
console.log(Object(null));
console.log(Function("suman"));
console.log(Function(1213));

//JS built in methods : which needs an object or instances
console.log("suman".toUpperCase());
console.log((123).toString());
console.log("suman".charAt(3));
console.log("suman".codePointAt(1));
console.log(String.fromCodePoint(1234));

eval("console.log('hello from Eval')");
console.log(isNaN(123));
console.log(isNaN(true));
console.log(isNaN("string"));

