'strict mode'
//The Good Parts
//var statements
var statement = 2;

//when used inside of a function, var statement defines the function's private variables.

//not a very useful switch, but it shows the syntax...
switch (statement) {
  case 1 : document.writeln("Using switch, this statement equals " + statement + "\"");
  break;
  case 2 : document.writeln("Using switch, this statement equals " + statement + "\"");
  break;

  default: document.writeln("This statement is neither 1 nor 2.");
}

//switch, while and do all can have labels that interact with the break statement? 
while (statement == 2) {
  document.writeln("Statement is equal to two, using while.");
  break;
}

//a block is a set of statements wrapped in curly braces.  They don't create a new scope
//so variables should be defined at the top of the function, not in blocks.

//if...then...else
//if the if expression is truthy, then block executes, else the else block executes

if ( statement == 2 ) {
  document.writeln("Then block shows that statement is two here.");
}
else {
  document.writeln("Else block shows that statemnt is not two.  Sorry bout it!");
}
  
//here are the falsy values:
//false
//null
//undefined
//""
//0
//NaN
//**EVERYTHING ELSE IS truthy!

var arr = ["hello", "goodbye", "hola", "farewell"];

document.writeln(typeof(arr));

for (i = 0; i < arr.length; i++){
  document.writeln(arr[i]);
}

//forin enumerates the property names (or keys) of an object...
//NOT the values of those keys???
//on each iteration, another property name string from the object is assigned to the variable

var peeps = { "Bf" : "John", "Gf" : "Nikki", "Cf" : "Meowzers" };
for (peep in peeps){
  //checks to see if the property name is a member of peeps or found on prototype chain
  if (peeps.hasOwnProperty(peep))
    document.writeln(peep);
}

//do statement (like while, but the statement is executed at least once
do {
  document.writeln(peeps.Bf);
}
while ("");

try {
  document.writeln(peeps.Gf);
}
catch ( gfProperty ){
  //I don't know what goes in here:
  //the catch clause defines a new variable that will receive the exception object
}

//return causes early return from a function
//return;

//break causes exit from a loop or switch.  Can have a label that will cause an exit
//from the labeled statement.
//break label;

//expression statements can:
//assign values to one or more variables or members:
var dog = "ralph";
var cat = "meowsers";
//these are var statements...

//invoke a method:
//strange that foo can be invoked ("ie called) from statements.js
//foo() must be in the global namespace?
foo();
foo(dog);

//delete a property from an object!
//= is assignment === is equality
//+= adds or concatenates

























