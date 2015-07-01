var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.pop = function(){
    if (length <= 0) {
      return 0;
    }
    length--;
    return storage[length+1];
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};


var stackOfDishes = Stack();
stackOfDishes.size();
stackOfDishes.push(platter);
stackOfDishes.push(plate);
stackOfDishes.pop();

