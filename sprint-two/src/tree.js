var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){ // adds node as child of tree (constant time)
	var child = Tree(value);
	this.children.push(child);
};

treeMethods.contains = function(target){ // linear time
	var found = false;
	var targetFinder = function(node) {
		if (node.value === target) {
		  found = true;
		  return;
	  }
	  for (var i=0; i<node.children.length; i++) {
	  	var child = node.children[i];
		  targetFinder(child);
	  }
	}
	targetFinder(this); // this === the root
	return found; // has to be outside targetFinder
};

treeMethods.traverse = function(callback){ // linear time
  callback(this.value); // performs callback on every value
  if (!this.children){return;}
  for (var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    child.traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */