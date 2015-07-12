var Queue = function() {
  var someInst = Object.create(queueMethods);
  someInst.storage = {};
  someInst.start = -1;
  someInst.end = -1;
  return someInst;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value; 
};
queueMethods.dequeue = function() {
	this.start++;
	var result = this.storage[this.start]; 
  delete this.storage[this.start];
  return result;
};
queueMethods.size = function() {
  if (this.end - this.start <= 0) {
    return 0;
  }
	return this.end - this.start;
};