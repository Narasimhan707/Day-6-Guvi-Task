

// Code to print the numbers in the array:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i];
}
console.log(new_string);
// Output: 1234567891011

// Code to print the numbers in the array with commas:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i];
  if (i != numsArr.length - 1) {
    new_string += ",";
  }
}
console.log(new_string);
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

// Code to print from last to first with spaces:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = numsArr.length - 1; i >= 0; i--) {
  new_string += numsArr[i] + " ";
}
console.log(new_string.trim());
// Output: 11 10 9 8 7 6 5 4 3 2 1

// Code to replace the array value with 'even' if the number is even:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);
// Output: [1, "even", 3, "even", 5, "even", 7, "even", 9, "even", 11]

// Code to replace the array value with 'even' if the index is even:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
  if (i % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);
// Output: ["even", 2, "even", 4, "even", 6, "even", 8, "even", 10, 11]

// Code to add all the numbers in the array:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
  sum += numsArr[i];
}
console.log(sum);
// Output: 66