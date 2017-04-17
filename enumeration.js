'strict mode'
//forin can loop over all the property names in an objext
//containing ALL of the properties!!!
//functions and prototype properties you might not be interested in!
//Therefore, you may have to filter out values you don't want via 
//hasOwnProperty and typeof to exclude functions
var name;
for (name in another_stooge) {
  if (typeof another_stooge[name] !== 'function') {
    document.writeln(name + ': ' + another_stooge[name]);
  }
}

var i; 
var properties = [
  'first-name',
  'middle-name',
  'last-name',
  'profession'
];

for (i = 0; i < properties.length; i += 1) {
  //another_stooge[properties[i]] might be ABSTRACTION.  another_stooge doesn't contain
  //a property called properties; instead
  //properties[i] returns 'first-name' or 'middle-name', etc, depending on enumerator state,
  //i.e. 0,1,2, etc. and
  //another_stooge['first-name'] returns the value of that property
  document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}









