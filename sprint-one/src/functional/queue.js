var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = -1;
  var start = -1;
  // Implement the methods below

  someInstance.enqueue = function(value){
    end++; // enqueue increments our length
    storage[end] = value;
  };

  someInstance.dequeue = function(){
    start++; // increments our start (bc something has just been dequeued)
    var result = storage[start];
    delete storage[start];
    return result;
  };

  someInstance.size = function(){
    if (end-start <= 0) {
      return 0;
    }
    return end-start;
  };

  return someInstance;
};

/*
queue.enqueue('a'); // Resulting object: {1: "a"}
queue.enqueue('b');	// {1: "a", 2: "b"}
queue.dequeue();	// DEQUEUED: 'a'   // Left with -> {2: "b"}
queue.enqueue('c');	// QUEUED: 'c' -> {2: "b", 3: "c"}
expect(queue.dequeue()).to.equal('b');  // DEQUEDED return: 'b'   // Left with -> {3: "c"}
*/

/*
queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
queue.enqueue('c');
expect(queue.dequeue()).to.equal('b');
*/
