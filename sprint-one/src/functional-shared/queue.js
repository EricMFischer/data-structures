var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInst = {
  	length: 0,
    storage: {},
    start: 0
  };

  _.extend(queueInst, queueMethods);
  return queueInst;
};

var queueMethods = {
	enqueue: function(value) {
		this.length++;
		this.storage[this.length] = value;
	},
	dequeue: function() {
		this.start++;
		// this.length--;
		//return this.storage[this.length - this.start + 1];
		return this.storage[this.start];
	},
  size: function() {
    if (this.length - this.start <= 0) {
      // Do nothing... for now...
      return 0;
    }
    return this.length - this.start;
  }
};