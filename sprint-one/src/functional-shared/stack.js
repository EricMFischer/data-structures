var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInst = {
  	length: 0,
  	storage: {}
  };
  extend(someInst, stackMethods);
  return someInst;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
	if (this.length <= 0) {
		return 0;
	}
	this.length--;
	var result = this.storage[this.length];
  delete this.storage[this.length];
  return result;
};

stackMethods.size = function() {
  return this.length;
};


var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}