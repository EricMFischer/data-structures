var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.start = -1;
  someInstance.end = -1;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
}

queueMethods.dequeue = function() {
  this.start++;
  var value = this.storage[this.start];
  delete this.storage[this.start];
  return value;
  
}

queueMethods.size = function() {
  if (this.end - this.start < 0) {return 0;}
  return this.end - this.start;
  
}