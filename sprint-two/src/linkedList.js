var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // constant time
    var newTail = Node(value);
    if (!list.head) {list.head = newTail;}
    if (list.tail) {list.tail.next = newTail;}
    list.tail = newTail;  // update list.tail
  };

  list.removeHead = function(){ // consant time
    if (list.head === null) {return null;}
    var currentHead = list.head;
    list.head = list.head.next;  // update list.head
    return currentHead.value;
  };

  list.contains = function(target){ // linear time
    var node = list.head;
    while (node) {
      if (node.value === target) {return true;}
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
