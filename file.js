// in-line comment
/* multi-line comment */
var a;
console.log(a);
a = 7;
console.log(a)

var a = 1;
a = a+5;
a+=10;
console.log(a);


// Arrays

// Attrs
var list = [1,2,3];
var len = list.length; // Su unico attr xd
console.dir(list); // solo funciona en el web browser
console.log(list[1]+list[0], list[list.length-1]); // no existe list[-1]

// Methods
var list = [1,2,-3172, 3, 45, 3, 3];
var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Apple" in fruits);

var arr = Array.from("Hello"); // Array.from(obj) == list(obj)

function fcn(n) {return n == 3 };
var age = list.find(fcn); // find the first elem that pass the test

var concat = list.concat(fruits); // concat() == extend()




// Strings

console.log(typeof list); // typeof obj == type(obj)
console.log(typeof String(list), list);  // String(obj) == str(obj)
console.log("FirstLine" + " \n Hey" + " zzzzzzzzz");

console.log(6 != 4); // Los operadores booleanos son los mismos


var str = "Hello, world!";
console.log(str.length); // obj.len == len(obj),  pero hay que ponerlo en una variable

console.log("Hello".length);