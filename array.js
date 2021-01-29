const countries = ['Russia', 'USA', 'France'];
/** LOOPS, циклы */
// while
// let i=0;
// while(i < countries.length) {
//   console.log(i); // 0, 1, 2
//   console.log(countries[i]);
//   i++;
// }

// for index
// for (let i=0; i < countries.length; i++) {
//     console.log(i); // 0, 1, 2
//     console.log(countries[i]);
// }

// for of
// for (let country of countries) {
//     console.log(country);
// }

// countries.forEach((itemCountry, i) => {
//    console.log(itemCountry);
//    console.log(i);
// })

const heroes = [{
  name: "John",
  age: 300
}, {
  name: "Jane",
  age: 100
}, {
  name: "Kate",
  age: 1000
}, {
  name: "Ivar",
  age: 10
}];

// const heroNames = heroes.map((hero) => {
//    return hero.name;
// });
// const heroAges = heroes.map((hero) => {
//    return hero.age;
// })
console.log(heroes);
// const oldHeroes = heroes.filter((hero) => {
//    return (hero.age <= 100);
// })

const oldHero = heroes.find((hero) => {
  return (hero.age <= 100);
})

console.log(oldHero);

console.log(heroes.map(hero => hero.name).join(' - '))

// console.log([1,2,3,5,7,9,10].indexOf(1));


// const fullNames = countries.map((country) => {
//     return `I'm from ${country}`;
// })
// console.log(fullNames);

/** FUNCTIONS, ФУНКЦИИ */
// function sum(a, b) {
//   return a+b;
// }

// const sum = function(a, b) {
//   return a+b;
// }

// const sum = (a, b) => {
//   return a+b;
// }

// const sum = (a, b) => a + b;

// console.log(sum(2,3)); // 5
// console.log(sum(4,7)); // 11





