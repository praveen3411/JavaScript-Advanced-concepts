// primitive data types
let a: number = 1000;
let b: string = "Praveen Kumar ";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
// non primitive data types
// arrays types
let f1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let f2: Array<number> = [10, 20, 30, 40, 50];
//
let f3: string[] = ["one", "two", "three", "four", "a"];
// here you can see that number cannot assigned to string

let f4: boolean[] = [true, false, true, false];
// declared the boolean of arrays

let f5: object[] = [{ one: "pro" }, { two: "two" }, { three: "three" }];
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
let f6: Array<string | number | object> = [
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
let f7: Array<
  string | boolean | null | number | Array<number> | Array<object>
> = ["one", null, true, 1, [1, 2, 3, 4], [{ one: "one" }, { two: "two" }]];

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
let one: {
  loading: boolean;
  error: boolean;
  success: number;
  data: Array<string>;
} = {
  loading: true,
  error: true,
  success: 1,
  data: ["one", "two", "three"],
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
let dicounts: {
  products: Array<object>;
  skincare: Array<string>;
  haircare: Array<object>;
  cart: Array<number | string | boolean>;
  nu: number;
  bo: string;
} = {
  products: [{}],
  skincare: ["one", "two"],
  haircare: [{}],
  cart: [1, 2, 3, 4, 5, "strings", true],
  nu: 1,
  bo: "hello",
};

// Records
/* Declaring a variable `boom` of type `Record<string, number>` and assigning it the value `{
  one: 1,
  two: 2,
}`. */
let boom: Record<string, number> = {
  one: 1,
  two: 2,
};
let boom1: Record<string, string> = {
  one: "one",
  two: "two",
};
let boom3: Record<string, object> = {
  one: { one: "hello" },
  two: { two: "hello" },
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
let boomdata: Array<{
  name: string;
  age: number;
  married: boolean;
  studying: boolean;
  course: string;
}> = [
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
];

// array of object records
/* Declaring a variable `boo` of type `Array<Record<string, string>>` and assigning it the value `[
  { name: "praveen", city: "bangalore" },
  { name: "praveen", city: "bangalore" },
  { name: "praveen", city: "bangalore" },
]`. */
let boo: Array<Record<string, string>> = [
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
const output = (a: number, b: number): number => {
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
const outputone = (
  a: number,
  b: string,
  c: boolean
): number | string | boolean => {
  return a + b + c;
};
outputone(1, "two", true);

//array of array

/* Declaring an array of arrays of numbers and strings. */
let rum: Array<number[] | string[]> = [
  [1, 2],
  [1, 2],
  ["one", "two"],
];

/* Declaring an array of arrays of strings. */
let boomld: Array<string[]> = [
  ["one", "two"],
  ["four", "five"],
  ["six", "seven"],
];

/* Declaring a variable `o` of type `Array<"India"|"China">` and assigning it the value
`["India",'China']`. */
let o: Array<"India" | "China"> = ["India", "China"];

//custom
//coustom types and objects
type dom = "one" | "two";
let p: Array<dom> = ["one", "two"];
type use = {
  name: string;
  age: number;
  gender: "Male" | "Female";
  password: string | number;
  city?: string;
};

let obj1: Array<use> = [
  {
    name: "praveen",
    age: 23,
    gender: "Male",
    password: 234455,
    city: "bangalore",
  },
  {
    name: "ganesh",
    age: 23,
    gender: "Male",
    password: "hello",
  },
];

// Code enum
enum Gender {
  "male",
  "female",
}

type boash = {
  name: string;
  age: number;
  gender: Gender;
};

let ro: Array<boash> = [
  { name: "one", age: 4, gender: Gender.male },
  { name: "one", age: 4, gender: Gender.female },
];

//tuples
type k = [string, number, boolean];
let bangalore: k[] = [
  ["one", 1, true],
  ["two", 2, false],
  ["three", 3, true],
];

//void
// functon which is not returing any value
let newfun = (a: number, b: string): void => {
  console.log(a, b);
};
newfun(1, "praveen");
