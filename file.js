// in-line comment
/* multi-line comment */


////////////////////////////////////////  Built in functions
Math.max(val1,val2); // val1 > val2 ? val1 : val2

console.dir(list); // como obj.__dir__() o dir(obj), solo funciona en el web browser
list instanceof Array // isinstances(onj, class)


// Logical Operators
// || or
// && and
// ! not
true // no True
false // no False


////////////////////////////////////////  Arrays

// Crear arrays
var list = [1,2,3]; 
var list2 = new Array(1,2,3);
var list3 = new Array(5).fill(0); // [0 for in range(5)]
var list3 = Array.from("Hello"); // Array.from(obj) == list(obj)


// Attrs
var len = list.length; // Su unico attr xd

// Get elements or slices
console.log(list[1]+list[0], list[list.length-1]); // no existe list[-1]
var s = list.slice(0,2) // como fruits[0:2], no incluye al ultimo

// Methods
list.includes(val) // val in list, no existe 'in' en JS  

list.push(val); // append(val)
list.unshift(val); // insert(0, val)
list.concat(list2); // extend(list2)
list.pop(); // pop(-1)
list.shift(); // pop(0)

list.join(","); // ','.join(list)


////////////////////////////////////////  Strings

console.log(typeof list); // typeof obj == type(obj)
console.log(typeof String(list), list);  // String(obj) == str(obj)
console.log("FirstLine" + " \n Hey" + " zzzzzzzzz");
console.log("+".repeat(5)+"\n")

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



function strToHash(str) {
    console.log(str)
    const str2 = str.replace(/ /g,''); // g es de 'global' para que remplace todos
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



// 
function numDiv(int) {
  var ans = 0;
  for (i=1;i<Math.floor(Math.sqrt(int))+1;i++) {
    if (int%i == 0 ) {
      ans += 2;
    }
  }
  if (Math.floor(Math.sqrt(int))**2 == int) {ans -= 1}
return ans
}


console.log(numDiv(4))