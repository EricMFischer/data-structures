var HashTable = function(){
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // 1. Get index (address) for our key (k)
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[i] === undefined) {
    this._storage[i] = [];
  }

  // 2. Once we have address, insert into our table at 'i' (address!)
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  // 1. Get index (address) for our key (k)
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Go to storage[i]
  
  // Count number of elements at storage[i] (Tooples?)
  for (var x=0; x<this._storage[i].length; x++) {
    if (this._storage[i][x][0] === k) {
      return this._storage[i][x][1];
    }
  }
      // Iterate through each toople
        // Find where [i][x][0] === k
        // Return v
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var x=0; x<this._storage[i].length; x++) {
    if (this._storage[i][x][0] === k) {
      this._storage[i][x][1] = null;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 var myTable = new HashTable();
 myTable.insert('val1','val1');
 myTable.insert('val2','val2');