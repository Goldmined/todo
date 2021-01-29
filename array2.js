let arr = [9,8,7,5,5]
//map [4,4,3,2,2]
//filter [4,4,2,2] 
//find 2
//slice [4,2]
//splice [2,2]

let arr2 = arr.map(function(n,i){
   return Math.trunc(n/2);
})
console.log(arr2);

let arr3 = arr2.filter((n,i) => (n))