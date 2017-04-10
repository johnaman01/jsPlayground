document.writeln('Hello, world!');

//the 'method' method to define new methods:
Function.prototype.method = function (name, func) {
  this.protogype[name] = func;
  return this;
};

//Math.floor
var x = 6.9283;
var y = Math.floor(x);
document.writeln(y);
