/** Нахождение суммы чисел */
// function sum(a, b) {
//    return a+b;
// }
// console.log(sum(2,3)); // 5 


/** Нахождение максимального числа из элементов массива */
const arr1 = [2,3,5,23,2,3,1];
const arr2 = [2,3,9,2,3,11,5];

function min(items) {
    let minEl = items[0] 
    for (let item of items) {
        if (minEl > item) {
            minEl = item;
        }
    }
    return minEl;
}

console.log(min(arr1)); // 1
console.log(min(arr2)); // 2

// function max(items) {
//     let maxEl = items[0]
//     for (let item of items) {
//         if (maxEl < item) {
//             maxEl = item;
//         }
//     }
//     return maxEl;
//   // return items[0];
// }

// console.log(max(arr1)); // 23
// console.log(max(arr2)); // 11