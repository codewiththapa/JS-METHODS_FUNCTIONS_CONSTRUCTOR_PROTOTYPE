//TYPE CHECKING more accurate then   "typeof"     strict equal "==="
// Array.isArray(value)
const arr = [1,2,3];
console.log(Array.isArray(arr),typeof arr);
console.log(typeof arr);

//Object.is(val1,val2)
let x = NaN;
let y = NaN;
console.log(Object.is(x,y));
console.log( x === y);
console.log(typeof x === typeof y);

//
let num = 0 / 0 ;
console.log(Object.is(num, NaN));
console.log(num === NaN);
console.log(typeof NaN === typeof num);

// Number.isFinite(value);
console.log(Number.isFinite(12));
console.log(Number.isFinite(98.32324));
console.log(Number.isFinite(-56));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(null));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite("12"));

//TYPE CONVERSION  USING  OBJECT  WRAPPER;
let conversion = new Boolean(0);
console.log(conversion.toString());
console.log(typeof Boolean , typeof conversion);
console.log(typeof Boolean === typeof conversion);
console.log( conversion instanceof Object, conversion instanceof Function ,  conversion instanceof Boolean);

// VALUE MANIPULATION USING  OBJECT  WRAPPER

//Type checking using  Object wrapper;

let primitivBool =  new Boolean (0);
console.log(primitivBool.constructor === Boolean);
console.log( primitivBool instanceof Boolean);
console.log(typeof primitivBool);