'strict mode'
//prototype
if (typeof Object.beget !== 'function') {
  Object.beget = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
//GLOBAL ABATEMENT:
//to minimize the use of global variables create a single global variable for 
//your application: line12 of objects.js
var another_stooge = Object.beget(MYAPP.stooge);
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
document.writeln(another_stooge['first-name']);
//dynamic
stooge.profession = 'actor';
document.writeln(another_stooge.profession);
//any property on the prototype chain can produce a value
document.writeln(typeof flight.toString);
//to avoid this, use the hasOwnProperty method, which
//does not look at the prototype chain
document.writeln(flight.hasOwnProperty('toString'));






