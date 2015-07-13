var HashTable = function(){
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // Get index (address) for our key k
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index); // Retrieve bucket at index
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  // Iterate over bucket to check for same key--if found, overwrite
  for (var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {tuple[1] = v; return;}
  }

  bucket.push([k,v]); // Store tuple in bucket (which can have mult. tuples)
  this._size++;
  if (this._size > 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  if (!bucket) {return null;}

  for (var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {return tuple[1];}
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {return null;}

  for (var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      if (this._size < 0.25 * this._limit) {
        this.resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  
  return null;
};

HashTable.prototype.resize = function(newSize){
  var oldStorage = this._storage;
  this._storage = LimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;

  oldStorage.each(function(bucket){
    if (!bucket) {return;}
    for (var i=0; i<bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
