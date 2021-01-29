
let arr = [2,5,3,7]; 
let arr2 = arr.map(function(n, i) {
    return n*2;
})

console.log(arr2);//[4,10,6,14]; 

// let arr3 = arr2.filter((n, i) => {
//     if (n%3 !== 0 ) {
//         return true;
//     } 
//     return false;
// })


let arr3 = arr2.filter((n, i) =>  (n%3 !== 0 ))
console.log(arr3); // [4,10,14]

let num = arr3.find((n,i) => {
    return n>9
}) 
console.log(num); // 10

let arr4 = arr3.slice(1,3) 
console.log(arr4); // 10

let num2 = arr3.splice(1,1)
console.log(arr3); // [4,14]

let sum = arr.reduce((acc,item)=> {
   acc += item;
   return acc;
},0)
console.log(sum)
