'strict mode'
//strings
var myIntro = 'Hello, world!\r\n\tI\'m sending this from vim, which is my editor of choice, because' + 
' ' + 'I apparently like to make things difficult!!!\r-John A.'

document.writeln(myIntro);

//the 'method' method to define new methods:
Function.prototype.method = function (name, func) {
  this.protogype[name] = func;
  return this;
};

//Math.floor
var x = 6.9283;
var y = Math.floor(x);
document.writeln(y);

//statements
//a compilation unit contains a set of executable statements
//**each <script> tag delivers a compilation unit that is compiled and immediately executed

//hoisting
var a = true;

document.writeln(typeof(a));
document.writeln('cat'.toUpperCase());
document.writeln(a);

//hoisting with foo
function foo(){
  var a = 3;
  document.writeln(a);
}

foo();





















