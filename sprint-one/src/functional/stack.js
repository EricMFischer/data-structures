var Stack = function(){
  var someInst = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInst.push = function(value){
    storage[size] = value;
    size++;
  };

  someInst.pop = function(){
    if (size <= 0) {
      return 0;
    }
    size--;
    var removed = storage[size];
    delete storage[size];
    return removed;
  };

  someInst.size = function(){
    return size;
  };

  return someInst;
};

/*
var stackOfDishes = Stack();
stackOfDishes.size();
stackOfDishes.push(platter);
stackOfDishes.push(plate);
stackOfDishes.pop();
*/
