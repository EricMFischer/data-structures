var Queue = function(){
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = -1; // start and end --> called diff things, but ultimately both get incremented
  someInstance.end = -1;   // as a result of enqueuing and dequeuing, respectively
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){ // add to back
    this.end++;
    this.storage[this.end] = value;
  };

queueMethods.dequeue = function(){ // remove from front
  this.start++;
  var result = this.storage[this.start];
  delete this.storage[this.start];
  return result;
};

queueMethods.size = function(){
  if (this.end - this.start < 0) {return 0;}
  return this.end - this.start;
};