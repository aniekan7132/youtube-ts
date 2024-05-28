// let age: number = 20;
// if(age < 50)
//  age += 10;
// console.log(age)

// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_publisehed: boolean = true;

// Without annotations - Explaining variable types
// let sales = 123_456_789;
// let course = "TypeScript";
// let is_publisehed: boolean = true;

// any
// let number: any;

// Array
// let numbers: number[] = [1, 2, 3];

// Tuple
let user: [number, string] = [1, "Mosh"];

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// Pascal Naming Convention - The first letter starts with a cap letter
// enums by default are zero based
const enum Size {
  Small,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// Objects
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// Type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Types - With union types, we can give a variable or function more than one type
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2;
  }
}

kgToLbs(10);
kgToLbs("10kg");