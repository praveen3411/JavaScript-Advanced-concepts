Credential.prototype.price = function (bro, man) {
  this.price = bro;
  this.safety = man;
};
const output = new cardetails("one", "two", "three", "four", "five");
(output.price = "15k"), (output.safety = true), console.log(output);

let details = {
  name: "praveen kumar",
  age: 23,
  city: "bangalore",
  area: "electronic-city",
  study: "full-stack-web",
  job: "Not Yet",
};

let boom = Object.create(details, {
  name: { value: "ganesh kumar yadav" },
  age: { value: 24 },
  city: { value: "kalyandurg" },
  area: { value: "doddatogru" },
  study: { value: "full-stack-web-development" },
  job: { value: "yes job-holder" },
});
console.log(boom);

function hello(one, two, three, four, five) {
  this.name = one;
  this.age = two;
  this.city = three;
  this.area = four;
  this.study = five;
}

let takeit = new hello(
  "praveen",
  "23",
  "bangalore",
  "electronic-city",
  "full-stack-web-developer"
);
console.log(takeit);

hello.prototype.name = function (don) {
  this.name = don;
};
takeit.name = "ganesh kumar yadav";
console.log(takeit);
