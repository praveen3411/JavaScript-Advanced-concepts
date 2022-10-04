function student(one, two, three, four, five) {
  this.name = one;
  this.age = two;
  this.city = three;
  this.study = four;
  this.field = five;
}

const output = new student("praveeen", 23, "Bangalore", "BCA", "Full-saack");
const output1 = new student("praveeen", 23, "Bangalore", "BCA", "Full-saack");
const output2 = new student("praveeen", 23, "Bangalore", "BCA", "Full-saack");
const output3 = new student("praveeen", 23, "Bangalore", "BCA", "Full-saack");
const output4 = new student("praveeen", 23, "Bangalore", "BCA", "Full-saack");

function customobject() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false,
  });
  this.length = arguments.length;
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}
const outputone = new customobject(output, output1, output2, output3, output4);
console.log(Object.values(outputone));

customobject.prototype.push = function (ele) {
  this[this.length] = ele;
  this.length++;
};
outputone.push(output);
console.log(Object.values(outputone));

customobject.prototype.pop = function () {
  delete this[this.length - 1];
  this.length--;
};
outputone.pop();
console.log(Object.values(outputone));

customobject.prototype.print = function () {
  console.log(Object.values(outputone));
};
outputone.print();
