let arr = [9,8,7,5,5]
//map [4,4,3,2,2]
//filter [4,4,2,2] 
//find 2
//slice [4,2]
//splice [2,2]

let arr2 = arr.map(function(n,i){
   return Math.trunc(n/2);
})
console.log(arr2); // [4, 4, 3, 2, 2]


let arr3 = arr2.filter((n, i) => (n%3 !== 0 ))
console.log(arr3); //[4, 4, 2, 2]

let num = arr3.find((n, i) => {
   return n<3;
})
console.log(num); //[2]

let arr4 = arr3.slice(1,3)
console.log(arr4);//[4,2]

let arr5 = arr3.splice(0,2)
console.log(arr3);//[2,2]
