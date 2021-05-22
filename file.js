// in-line comment
/* multi-line comment */


// Built in functions
Math.max(val1,val2);


// Logical Operators
// || or
// && and
// ! not


// Arrays

var list = [1,2,3]; // Usa este para crear arrays
var list2 = new Array(1,2,3);
var len = list.length; // Su unico attr xd
console.dir(list); // solo funciona en el web browser
console.log(list[1]+list[0], list[list.length-1]); // no existe list[-1]

var list = [1,2,-3172, 3, 45, 3, 3];
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var s = fruits.slice(0,2) // como fruits[0:2], no incluye al ultimo
list.includes(val) // si val esta en array, no existe 'in' en JS  
var arr = Array.from("Hello"); // Array.from(obj) == list(obj)
list.find(fcn); // find the first elem that pass the test
list.concat(fruits); // concat() == extend()




// Strings

console.log(typeof list); // typeof obj == type(obj)
console.log(typeof String(list), list);  // String(obj) == str(obj)
console.log("FirstLine" + " \n Hey" + " zzzzzzzzz");

console.log(6 != 4); // Los operadores booleanos son los mismos


var str = "Hello, world!";
console.log(str.length); // obj.len == len(obj),  pero hay que ponerlo en una variable

console.log("Hello".length);


const str = "a=1, b=2, c=3, d=4";
const str2 = str.replace(/ /g,'');
console.log(str2)
var dict = {};
var str3 = str2.split(',');
console.log(typeof str3, str3);
for (i=0; i<str3.length; i++) {
    console.log(str3[i], str3[i][0], str3[i][1], str3[i][2]);
};
console.log(dict);



function strToHash(str){
    console.log(str)
    const str2 = str.replace(/ /g,'');
    var dict = {};
    var list = str2.split(',');
    for (i=0; i<list.length; i++) {
      var x = list[i].split('=');
      dict[x[0]] = parseInt(x[1])
    }
    return dict
  }

var str = "";
if (str) {
    console.log("Hey")
}

// Set
var s = new Set([1,2,3]); // new set, si quieres que sea vacio: new Set(); no intentes s = ();
s.add(val) 
s.remove(val) 
s.clear() // limpia el set
s.has(val) // True si val in s


// Dictionary

var dict = {};
dict[new_key] = new_value;

var array = [3,2,1,2,3,3,2,2,2,3,4];
var s = {};
var ans = 0;
var i;
for (i=0; i<array.length; i++) {
  if (!(array[i] in s)) {
    s[array[i]] = 1;
  }
  else {
    s[array[i]]++;
  }
}
  console.log(s)