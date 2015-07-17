var Stack = function() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

Stack.prototype.pop = function() {
  this.length--;
  var value = this.storage[this.length];
  delete this.storage[this.length];
  return value;
}

Stack.prototype.size = function() {
  if (this.length < 0) {return 0;}
  return this.length;
}