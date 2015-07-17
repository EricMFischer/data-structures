var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // constant time
    var newTail = Node(value);
    if (list.head === null) {list.head = newTail;}
    else {list.tail.next = newTail;}
    list.tail = newTail; // update list.tail
  };

  list.removeHead = function(){ // constant time
    if (list.head === null) {return null;}
    var currentHead = list.head;
    list.head = list.head.next; // update list.head
    return currentHead.value;
  };

  list.contains = function(target){ // linear time
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
