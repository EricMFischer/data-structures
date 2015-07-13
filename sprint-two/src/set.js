/*
A set is an abstract data type that can store certain values without any particular order and no repeated values.

A set would be great for a raffle, where you want to randomly pick one ticket out of them all.
*/

var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  return !!this._storage[item];
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
