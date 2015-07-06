var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = -1;
  this.end = -1;
};

Queue.prototype.enqueue = function(value) {
	this.end++;
	this.storage[this.end] = value;
};

Queue.prototype.dequeue = function() {
	this.start++;
	var result = this.storage[this.start];
  delete this.storage[this.start];
  return result;
};

Queue.prototype.size = function() {
	if (this.end - this.start <= 0) {
		return 0;
	}
	return this.end - this.start;
};

Queue.prototype.constructor = Queue;