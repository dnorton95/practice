// var arr = [-5,-4,-3,5,4,3];

// function swapNegforDojo(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = "dojo";
//         }
//     }
//     return arr
// }

// console.log(swapNegforDojo(arr))

// var arr = [1,2,3,4,5] 

// function shiftArrValsLeft(arr) {
//     var firstElement = arr.shift();
//     arr.push(0);

//     return arr;
// }

// console.log(shiftArrValsLeft(arr));

// 

// var arr = [-3, 3, -2, 2, -1, 1];

// function zeroNegValues() {
//     for (var i=0; i< arr.length; i++) {
//         if (arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     return arr
// }

// console.log(zeroNegValues(arr))

// var arr = [1,2,3,4,5,6,7,8,9,10];

// function printArrGreaterThanY(arr, y) {
//     y = 5;
//     count = 0;
//     for (var i=0; i <arr.length; i++) {
//         if (arr[i] > y) {
//             console.log(arr[i])
//             count = count + 1
//         }
//     }
//     return count
// }

// console.log(printArrGreaterThanY(arr))

// var arr = [2,4,6,8,10];

// function squareArrValues(arr){
//     for (var i = 0; i < arr.length; i++){
//         arr[i] = arr[i]*arr[i];
//     }
//     return arr;
// }
// console.log(squareArrValues(arr));

// var arr = [];

// function returnOddsToArr(arr) {
//     for( var i = 0; i <=255; i++) {
//         if (i % 2 != 0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(returnOddsToArr(arr))

// var arr = [1,2,3,4,5,6,7,8,9,10]

// function squareArrVals(arr){
//     var sum = 0;
//     var avg = 0;
//     for (var i=0; i<arr.length; i++) {
//         sum = arr[i] + sum
//         avg = sum / arr.length
//     }
//     return avg
// }

// console.log(squareArrVals(arr))

// var arr = [1,2,3,4,5,6,777];

// function printMaxArr(arr) {
//     max = 0;
//     for (var i = 0; i <arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max
// }

// console.log(printMaxArr(arr))

// var arr = [1,2,3,4,5];

// function printArrValues(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         newArr = console.log(arr[i]);
//     }
//     return newArr
// }

// console.log(printArrValues(arr));

// var arr = [];

// function printIntsAndSum(arr){
//     var sum = 0;
//     for (var i = 0; i <= 255; i++) {
//         arr.push(i)
//         sum = i+sum;
//     }
//     return [arr, sum]
// }

// console.log(printIntsAndSum(arr));

// var arr = [];

// function printOdds1to255(arr){
//     for(var i=0; i<=255;i++){
//         if (i%2 != 0) {
//             arr.push(i);
//         }
//     }
//     return arr
// }

// console.log(printOdds1to255(arr));

var arr = [];

function print1to255(arr) {
    for (var i = 0; i <=255; i++) {
        arr.push(i);
    }
    return arr
}
console.log(print1to255(arr))