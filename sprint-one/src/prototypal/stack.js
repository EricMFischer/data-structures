var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInst = Object.create(stackMethods);
  stackInst.length = 0;
  stackInst.storage = {};
  return stackInst;
};

var stackMethods = {
  push: function(value) {
    this.length++;
    this.storage[this.length] = value;
  },
	pop: function() {
		this.length--;
		return this.storage[this.length + 1];
	},
	size: function() {
		if (this.length <= 0) {
			return 0;
		}
		return this.length;
	}
};


