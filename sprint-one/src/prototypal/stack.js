var Stack = function() {
  var someInst = Object.create(stackMethods);
  someInst.storage = {};
  someInst._size = 0;
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