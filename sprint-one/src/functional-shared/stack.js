var Stack = function() {
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance._size = 0;
  someInstance._storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
}

stackMethods.pop = function() {
  this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
}

stackMethods.size = function() {
  if (this._size < 0) {return 0;}
  return this._size;
}


































/*

var Stack = function(){
  var someInstance = {}; // functional: instantiates an object for us

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  someInstance.push = function(value){
    storage[length] = value;
    length++; // needs to after, e.g. if length is 3, you want to push in at position [3], not [4]
  };

  someInstance.pop = function(){
    length--; // needs to go before, e.g. length may be 3, but that means you want to remove at position [2]
    var result = storage[length];
    delete storage[length];
    return result;
  };

  someInstance.size = function(){
    if (length < 0) {return 0;}
    return length;
  };

  return someInstance;
};

*/