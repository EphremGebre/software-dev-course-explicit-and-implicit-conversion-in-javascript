/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;  // Explicit conversion to number
console.log("The result is: " + result); // Output: 3

let isValid = Boolean("false"); // The string "false" is truthy!
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;  // Convert to number before addition
console.log("Total Age: " + totalAge); // Output: 30

let x = "10";
let y = 2;
let resultproduct = x * y; // "10" is implicitly converted to 10
console.log("Implicit conversion:", resultproduct); // Output: 20

let val = undefined;
console.log("Before:", val, "Type:", typeof val);

let converted = Number(val);  // undefined → NaN
console.log("After conversion:", converted, "Type:", typeof converted); // Output: NaN
