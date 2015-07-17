var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.length = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

stackMethods.pop = function() {
  this.length--;
  var value = this.storage[this.length];
  delete this.storage[this.length];
  return value;
}

stackMethods.size = function() {
  if (this.length < 0) {return 0;}
  return this.length; 
}