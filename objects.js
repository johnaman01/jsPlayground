//numbers, strings, booleans, null and undefined are all simple types
//numbers, strings, booleans are object-like, but are immutable
//
//objects are mutable keyed collections
//arrays are objects, functions are objects, regular expressions are objects and objects are 
//OBJECTS
//+++++++
//
var empty_object = {};
var stooge = {
  "first-name" : "Jerome",
  "last-name" : "Howard"
};
//above are expressions/object literals
//property's name can be any string, including empty...
var show = {
  "" : "Three"
};
//quotes are optional as long as the name would be a legal JS name and not a reserved word!!!
//"first-name" or first_name
//
//A property's value can be obtained from any expression, including another object literal:
var flight = {
  airline : "Oceanic",
  number : 815,
  //the departure object contains information about the flight as it departs...ie the airport's IATA, etc.
  departure : {
    IATA : "SYD",
    time : "2004-09-22 14:55",
    city : "Sydney"
  },
  arrival : {
    IATA : "LAX",
    time : "2004-09-23 10:42",
    city : "Los Angeles"
  }
};

//Retrieval
//values can be retrieved from an object by wrapping a string expression in a [ ] suffix.
//if the string expression is a constant, and if it is a legal JS name and not
//a reserved word, then the . notation can be used instead.
document.writeln(stooge["first-name"]);
document.writeln(flight.departure.IATA);

var middle = stooge["middle-name"] || "(none)";
document.writeln(middle);

//attempting to retrieve values from undefined throws TypeError exception. This can be
//guarded against with the && operator:

document.writeln(flight.equipment);
document.writeln(flight.equipment.model);

//prototype
if (typeof Object.beget !== 'function') {
  Object.beget = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

var another_stooge = Object.beget(stooge);
another_stooge['first-name'] = 'Harry';
document.writeln(another_stooge['first-name']);
















