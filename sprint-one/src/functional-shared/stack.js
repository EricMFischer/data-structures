var Stack = function() {
  var someInst = {};
  someInst.storage = {};
  someInst._size = 0;
  _.extend(someInst, stackMethods);

  return someInst;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
	this._size--;
	var result = this.storage[this._size];
  delete this.storage[this._size];
  return result;
};

stackMethods.size = function() {
  if (this._size <= 0) {
    return 0;
  }
  return this._size;
};

// Example of extend
var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}