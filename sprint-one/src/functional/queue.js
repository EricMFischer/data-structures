var Queue = function(){
  var someInst = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = -1;
  var end = -1;

  someInst.enqueue = function(value){ // add to the back
    end++;
    storage[end] = value;
  };

  someInst.dequeue = function(){ // remove from the front
    start++;
    var result = storage[start];
    delete storage[start];
    return result;
  };

  someInst.size = function(){
    if (end - start <= 0) {
      return 0;
    }
    return end - start;
  };

  return someInst;
};

/*
queue.enqueue('a'); // Resulting object: {1: "a"}
queue.enqueue('b');	// {1: "a", 2: "b"}
queue.dequeue();	  // DEQUEUED(returned): 'a'   // Left with -> {2: "b"}
queue.enqueue('c');	// QUEUED: 'c' -> {2: "b", 3: "c"}

queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
queue.enqueue('c');
expect(queue.dequeue()).to.equal('b');
*/
