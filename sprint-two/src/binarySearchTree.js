var BinarySearchTree = function(value){
	var myTree = {};
	myTree.root = value;
	myTree.left = null;
	myTree.right = null;

	_.extend(myTree, BinarySearchTreeMethods);
	return myTree;
};

var BinarySearchTreeMethods = {
	insert: function(value) {
		// everytime you insert a new node, set that node to the new root value
		if (value < this.root) {
	    if (this.left === null) {
				this.left = BinarySearchTree(value);
			} else {
				this.left.insert(value);
			}
		}
		if (value > this.root) {
			if (this.right === null) {
				this.right = BinarySearchTree(value);
			} else {
				this.right.insert(value);
			}
		}
	},
	contains: function() {

	},
	depthFirstLog: function() {

	}
}

var newTree = BinarySearchTree(5);
BinarySearchTree.insert(3);
BinarySearchTree.insert(2);



// NEW FUNCTION TIME!
// Node constructor with 3 properties
	// create new node obj	
		// value
		// left
		// right
	// return our obj!


/*
 * Complexity: What is the time complexity of the above functions?
 */