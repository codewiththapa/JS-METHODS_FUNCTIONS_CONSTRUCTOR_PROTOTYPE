// In JavaScript, wrapper objects refer to a concept where primitive values (such as numbers, strings, and booleans) are temporarily wrapped in an object form to allow access to methods and properties. This is because primitive values, like number or string, do not have methods directly associated with them. However, in JavaScript, all primitive values are automatically wrapped in their corresponding object types (i.e., Number, String, Boolean) when you attempt to access a property or method on them.


// A wrapper object is an object that "wraps" a primitive value (such as a string, number, or boolean) into a corresponding object type. These wrapper objects allow us to call methods on primitive types as if they were objects.

// For example:

// A String object wraps a primitive string.
// A Number object wraps a primitive number.
// A Boolean object wraps a primitive boolean.



// Why is it Called a Wrapper?
// It’s called a wrapper because the primitive value is "wrapped" inside an object temporarily so that it can support methods and properties.

// In JavaScript, wrapper objects are automatically created behind the scenes when you try to invoke methods or properties on primitive values. These wrappers behave like objects but are only temporary. When the operation completes, JavaScript discards the wrapper object and returns to using the primitive value.



// How Wrapper Objects Work Behind the Scenes
// When you access a property or method on a primitive value, JavaScript automatically converts the primitive into its corresponding wrapper object, allowing the method or property to be accessed. This conversion is temporary—once the operation is completed, the wrapper object is discarded, and the result is returned as a primitive value.


// There are two types of WRAPPER OBJECT   
// 1: IMPLICIT WRAPPER OBJECT  
// 2:EXPLICIT WRAPPER OBJECT

let num = 42;  // Primitive number
console.log(num.toString()); // The primitive number is wrapped in a Number object to call 'toString()'

let bool = true;  // Primitive boolean
console.log(bool.valueOf()); // The primitive boolean is wrapped in a Boolean object to call 'valueOf()'



let str = "Hello";
let strObj = new String(str);  // Explicitly creating a String object
console.log(strObj instanceof String); // Output: true


let x = "hello";
let y = new String("hello");
console.log(x === y); // Output: false (x is a primitive, y is a String object);



// WRAPPER OBJECT :  String(), Boolean(),  Number()

// Implicit wrapper object
let str = "hello";
console.log(str, str instanceof String);  //returns primitive value
console.log(str.toUpperCase());


// EXplicit wrapper object
let str2 = String("hello");
 console.log(str2, str2 instanceof String); // returns prinitive val
console.log(str2.concat("\nworld").toUpperCase());
console.log(str2);

console.log( str === str2);    // true

// Defining Explicit Wrapper  Object :

let str3 = new String("hello");
console.log(str3, str3 instanceof String, str3 instanceof Object);


// Strictly equality
console.log( str2 === str3);  //false
console.log( str === str3);   //false

//Loosely equality
console.log( str == str3);     //true
console.log( str2 == str3);    //true



//

let str = String(123);
console.log(str);


// This is explicit because you're calling the String() function directly to convert the primitive number 123 into a string. In this case, String() is a function that explicitly wraps the number 123 into its string representation.

// The String() function is a global JavaScript function that explicitly converts a value into a string, whether that value is a number, boolean, or any other type. It does not create a String object (like new String() would), but simply converts the value to its string form.

// So, String(123) results in the primitive string "123", not a String object.

// What happens behind the scenes:

// String(123) performs an explicit type conversion (i.e., explicit wrapping) and converts the number 123 into a primitive string ("123").
// This is not creating an actual wrapper object like new String("123") would. It's just returning the string primitive "123".
