const persons = ['rakib', 'rokib', 'sakib', 'akib', 'nokib' ];
const sortedPerson = persons.sort();
// console.log(sortedPerson)

// sort 

// const numbers = [4, 7, 2, 8, 3, 6];
// const numbers_asc = numbers.sort()
// console.log(numbers_asc)

const numbers2 = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc2 = numbers2.sort()
const numberAsc = [...numbers2].sort(function(a,b) { return a - b})
const numberDsc = [...numbers2].sort(function(a,b) { return b - a})
console.log(numberAsc)
console.log(numberDsc)