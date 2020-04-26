Implementing Hash Tables in JS = Data Structure Like Map ans Sets
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    // let arraySize = this.data.length;
    if (!this.data[address]) {
      this.data[address] = [key, value];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0]);
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("graps", 10000);
myHashTable.set("apples", 450000);
myHashTable.set("Banana", 74000);

let result = myHashTable.get("Banana");
console.log(result);
console.log(myHashTable.keys());
var colors = ["red", "green", "white"];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
