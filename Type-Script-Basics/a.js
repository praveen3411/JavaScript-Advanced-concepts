// primitive data types
var a = 1000;
var b = "Praveen Kumar ";
var c = true;
var d = null;
var e = undefined;
// non primitive data types
// arrays types
var f1 = [1, 2, 3, 4, 5, 6, 7, 8];
var f2 = [10, 20, 30, 40, 50];
//
var f3 = ["one", "two", "three", "four", "a"];
// here you can see that number cannot assigned to string
var f4 = [true, false, true, false];
// declared the boolean of arrays
var f5 = [{ one: "pro" }, { two: "two" }, { three: "three" }];
// declared array of objects
/* Declaring a variable `f6` of type `Array<string | number | object>` and assigning it the value `[
  "one",
  "two",
  "three",
  "four",
  1,
  2,
  3,
  4,
  5,
  { one: "one" },
]`. */
var f6 = [
    "one",
    "two",
    "three",
    "four",
    1,
    2,
    3,
    4,
    5,
    { one: "one" },
];
// Both the string or values
/* Declaring a variable `f7` of type `Array<
  string | boolean | null | number | Array<number> | Array<object>
>` and assigning it the value `["one", null, true, 1, [1, 2, 3, 4], [{ one: "one" }, { two: "two"
}]]`. */
var f7 = ["one", null, true, 1, [1, 2, 3, 4], [{ one: "one" }, { two: "two" }]];
//comming to objects
/* Declaring a variable `one` of type `{
  loading: boolean;
  error: boolean;
  success: number;
  data: Array<string>;
}` and assigning it the value `{
  loading: true,
  error: true,
  success: 1,
  data: ["one", "two", "three"],
}`. */
var one = {
    loading: true,
    error: true,
    success: 1,
    data: ["one", "two", "three"]
};
// create objects of arrays
/* Declaring a variable `dicounts` of type `{
  products: Array<object>;
  skincare: Array<string>;
  haircare: Array<object>;
  cart: Array<number | string | boolean>;
  nu: number;
  bo: string;
}` and assigning it the value `{
  products: [{}],
  skincare: ["one", "two"],
  haircare: [{}],
  cart: [1, 2, 3, 4, 5, "strings", true],
  nu: 1,
  bo: "hello",
}`. */
var dicounts = {
    products: [{}],
    skincare: ["one", "two"],
    haircare: [{}],
    cart: [1, 2, 3, 4, 5, "strings", true],
    nu: 1,
    bo: "hello"
};
// Records
/* Declaring a variable `boom` of type `Record<string, number>` and assigning it the value `{
  one: 1,
  two: 2,
}`. */
var boom = {
    one: 1,
    two: 2
};
var boom1 = {
    one: "one",
    two: "two"
};
var boom3 = {
    one: { one: "hello" },
    two: { two: "hello" }
};
// array of objects
/* Declaring a variable `boomdata` of type `Array<{
  name: string;
  age: number;
  married: boolean;
  studying: boolean;
  course: string;
}>` and assigning it the value `[
  {
    name: "praveen",
    age: 23,
    married: false,
    studying: true,
    course: "stack developer",
  },
  {
    name: "ganesh",
    age: 22,
    married: false,
    studying: true,
    course: "web-developer",
  },
]`. */
var boomdata = [
    {
        name: "praveen",
        age: 23,
        married: false,
        studying: true,
        course: "stack developer"
    },
    {
        name: "ganesh",
        age: 22,
        married: false,
        studying: true,
        course: "web-developer"
    },
];
// array of object records
/* Declaring a variable `boo` of type `Array<Record<string, string>>` and assigning it the value `[
  { name: "praveen", city: "bangalore" },
  { name: "praveen", city: "bangalore" },
  { name: "praveen", city: "bangalore" },
]`. */
var boo = [
    { name: "praveen", city: "bangalore" },
    { name: "praveen", city: "bangalore" },
    { name: "praveen", city: "bangalore" },
];
//function in typescript    
/**
 * The function takes two numbers as arguments, adds them together, and returns the result
 * @param {number} a - number
 * @param {number} b - number
 * @returns 2
 */
var output = function (a, b) {
    return a + b;
};
output(1, 1);
// return both sring and number
/**
 * This function takes in three parameters, a number, a string, and a boolean, and returns a number, a
 * string, or a boolean.
 * @param {number} a - number
 * @param {string} b - string
 * @param {boolean} c - boolean
 * @returns number | string | boolean
 */
var outputone = function (a, b, c) {
    return a + b + c;
};
outputone(1, "two", true);
//array of array
/* Declaring an array of arrays of numbers and strings. */
var rum = [
    [1, 2],
    [1, 2],
    ["one", "two"],
];
/* Declaring an array of arrays of strings. */
var boomld = [
    ["one", "two"],
    ["four", "five"],
    ["six", "seven"],
];
/* Declaring a variable `o` of type `Array<"India"|"China">` and assigning it the value
`["India",'China']`. */
var o = ["India", "China"];
var p = ["one", "two"];
var obj1 = [
    {
        name: "praveen",
        age: 23,
        gender: "Male",
        password: 234455,
        city: "bangalore"
    },
    {
        name: "ganesh",
        age: 23,
        gender: "Male",
        password: "hello"
    },
];
// Code enum
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var ro = [
    { name: "one", age: 4, gender: Gender.male },
    { name: "one", age: 4, gender: Gender.female },
];
var bangalore = [
    ["one", 1, true],
    ["two", 2, false],
    ["three", 3, true],
];
//void
// functon which is not returing any value
var newfun = function (a, b) {
    console.log(a, b);
};
newfun(1, "praveen");
