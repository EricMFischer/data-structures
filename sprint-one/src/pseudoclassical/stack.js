var Stack = function() {
  this.storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
	this._size--;
	var result = this.storage[this._size];
  delete this.storage[this._size];
  return result;
};

Stack.prototype.size = function() {
	if (this._size <= 0) {
		return 0;
	}
	return this._size;
};

// Stack.prototype.constructor = Stack;