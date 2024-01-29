// 13. Swap String For Array Negative Values
// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.

// var arr = [-2, -1, 0, 1,2,3,4,5];

// function swapStringForArrayNegativeVals(arr) {
//     for (var i=0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = "Dojo"
//         }
//     }
//     return arr
// }

// console.log(swapStringForArrayNegativeVals(arr))

// 12. Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// var arr = [1,2,3,4,5]

// function shiftArrayValsLeft(arr){
//     arr.shift();

//     arr.push(0);

//     return arr;
// }

// console.log(shiftArrayValsLeft(arr));

// 11. Max, Min, Average
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

// var arr = [1,2,3,4,5,6,7,8,9,10]

// function printMaxMinAverageArrayVals(arr){
//     var max = 0;
//     var min = 1000;
//     var sum = 0;
//     var avg = 0;

//     for (var i=0; i<arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         sum += arr[i];
//         avg = sum/arr.length
//     }
//     return [max, min, avg]
// }
// console.log(printMaxMinAverageArrayVals(arr));

// 10. Zero Out Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 

// var arr = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

// function zeroOutArrayNegativeVals(arr){
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0){
//             arr[i] = 0
//         }
//     }
//     return arr;
// }
// console.log(zeroOutArrayNegativeVals(arr))

// 9. Greater than Y
// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 

// var arr = [-1,-2,-3,-4,-5,0,1, 2,3,4,5];
// var y = 0;

// function printArrayCountGreaterThanY(arr, y) {
//     var count = 0;
//     var newarr = [];

//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > y){
//             count = count + 1;
//             newarr.push(arr[i])
//         }
//     }
//     console.log(count);
//     return newarr
// }

// console.log(printArrayCountGreaterThanY(arr, y))

// 8. Square the Values
// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

// var arr = [2,4,6,8]; 

// function squareArrayVals(arr) {
//     var newarr =[];
//     for (var i = 0; i < arr.length; i++){
//         newarr.push(Math.pow(arr[i], 2));
//     }
//     return newarr
// }

// console.log(squareArrayVals(arr));

// 7. Array with Odds
// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  

// var arr = [];

// function returnOddsArray1To255(arr) {
//     for (var i = 0; i <= 255; i++) {
//         if (i % 2 != 0) {
//             arr.push(i);
//         }
//     }
//     return arr
// }

// console.log(returnOddsArray1To255(arr))

// 6. Get and Print Average
// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

// var arr = [1,2,3,4,5,6,7,8,9,10];

// function printAverageOfArray(arr){
//     var count = 0;
//     var sum = 0;
//     var avg = 0;
//     for (var i=0; i<arr.length; i++){
//         sum = arr[i] + sum;
//         count = count + 1;
//         avg = sum / count;
//     }
//     return avg
// }

// console.log(printAverageOfArray(arr))


// 5. Find and Print Max
// printMaxOfArray(arr)
// Given an array, find and print its largest element. 

// var arr = [1,2,3,4,5]
// function printMaxOfArray(arr) {
//     max = null
//     for (var i = 0; i <arr.length; i++){
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max

// }
// console.log(printMaxOfArray(arr));

// 4. Iterate and Print Array
// printArrayVals(arr)
// Iterate through a given array, printing each value. 

// var arr = [1,2,3,4,5]

// function printArrayVals(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// console.log(printArrayVals(arr));

// 3. Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

// function printIntsAndSum0To255() {
//     for (var i=0; i <= 255; i++) {
//         console.log(i);
//     }
// }

// console.log(printIntsAndSum0To255())

// 2. Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255. 

// function printOdds1To255() {
//     for (var i = 0; i <= 255; i++) {
//         if (i%2 != 0) {
//             console.log(i);
//         }
//     }
// }

// console.log(printOdds1To255())



