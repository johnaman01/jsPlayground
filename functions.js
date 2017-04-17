//A function encloses a set of statements
//the fundamental modular unit of JS
//used for:
//code reuse, information hiding, and composition
//to specify the behavior of objects
//PROGRAMMING IS 
//"the factoring of a set of requirements into a set of functions and data structures"
//
//FUNCTION OBJECTS
//functions are objects, and objects are collections of name/value pairs having a hidden 
//link to a prototype object
//Function objects are linked to Function.prototype, which in itself is linked to Object.prototype
//every function is also created with two additional hidden properties: context and code
//
//every function object is also created with a prototype property whose value is
//an object with a constructor property whose value is the function!
//
//since functions are objects, they can have methods
//what is so special about a function???
//it can be INVOKED
var add = function (a, b) {
  return a + b;
};

document.writeln(add(93.2, .8));













