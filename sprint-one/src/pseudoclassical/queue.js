var Queue = function() {
  this.storage = {};
  this.start = -1;
  this.end = -1;
};

Queue.prototype.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
}

Queue.prototype.dequeue = function() {
  this.start++;
  var value = this.storage[this.start];
  delete this.storage[this.start];
  return value; 
}

Queue.prototype.size = function() {
  if (this.end - this.start < 0) {return 0;}
  return this.end - this.start;
}

// Queue.prototype.constructor = Queue;