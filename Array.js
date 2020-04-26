class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  insert(item) {
    //get length of object
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
}

const newArray = new MyArray();
newArray.insert(5);
newArray.insert(3);
newArray.insert(2);
newArray.insert(4);
newArray.insert(9);

console.log(newArray);
console.log("===============");
console.log(newArray.delete(1));
console.log(newArray);
console.log("===============");

function mergeSortedArray(array1, array2) {
  const bigArray = [];
  let firsItemArray1 = array1[0];
  let firsItemArray2 = array2[0];
  let [i, j] = [1, 1];
  while (firsItemArray1 || firsItemArray2) {
    if (firsItemArray1 < firsItemArray2) {
      bigArray.push(firsItemArray1);
      firsItemArray1 = array1[i];
      i++;
    } else {
      bigArray.push(firsItemArray2);
      firsItemArray2 = array2[i];
      i++;
    }
  }
}
