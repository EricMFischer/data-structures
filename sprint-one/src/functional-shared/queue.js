var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInst = {
    storage: {},
    start: -1,
  	end: -1,
  };

  _.extend(someInst, queueMethods);
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