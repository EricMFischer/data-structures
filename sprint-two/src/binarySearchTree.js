var BinarySearchTree = function(value){
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val){ 
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    return "The tree already contains this value.";
  }
};

binaryTreePrototype.contains = function(val){
  if (val === this.value){
    return true;
  } else if (val < this.value) {
    if (!this.left){
      return false;
    } else {
      return this.left.contains(val);
    }
  } else if (val > this.value) {
    if(!this.right){
      return false;
    } else {
      return this.right.contains(val);
    }
  }
};
// executes callback on every value contained in tree
binaryTreePrototype.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left){
    this.left.depthFirstLog(callBack);
  }
  if (this.right){
    this.right.depthFirstLog(callBack);
  }
};

/*
All methods have logarithmic time complexity, or O(log(n)).

var newTree = BinarySearchTree(5);
BinarySearchTree.insert(3);
BinarySearchTree.insert(2);

/*
 * Complexity: What is the time complexity of the above functions?
 */