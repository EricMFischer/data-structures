var Queue = function(){
  var someInstance = {}; // functional: instantiates an object for us

  // Use an object with numeric keys to store values
  var storage = {};
  var start = -1;
  var end = -1;
  // start and end --> called diff things, but ultimately both get incremented
  // as a result of enqueuing and dequeuing, respectively

  someInstance.enqueue = function(value){ // add to back
    end++;
    storage[end] = value;
  };

  someInstance.dequeue = function(){ // remove from front
    start++;
    var result = storage[start];
    delete storage[start];
    return result;
  };

  someInstance.size = function(){
    if (end - start < 0) {return 0;}
    return end - start;
  };
  return someInstance;
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
