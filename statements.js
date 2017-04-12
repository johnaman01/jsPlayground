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


























