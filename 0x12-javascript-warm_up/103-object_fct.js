#!/usr/bin/node
class MyObject {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  incr() {
    this.value++;
  }
}

const myObject = new MyObject('object', 12);
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);

