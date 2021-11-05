// const arr = [9, 42, -12, 8, -24];

// const getSum = (arr) => {
//   return arr.reduce((prevResult, curEl) => {
//     if (curEl % 2 === 0 && curEl > 0) {
//       return prevResult + curEl;
//     } else return prevResult;
//   }, 0);
// };

// console.log(getSum(arr));

// 2 вариан
// const arr = [9, 42, -12, 8, -24];

// const getSum = (arr) => {
//   let result = 0;
//   arr.forEach((el) => {
//     if (el % 2 === 0 && el > 0) {
//       result += el;
//     }
//   });
//   return result;
// };
// console.log(getSum(arr));

// const arr = [1, 1, 5, 6, 9, 9, 42, 42, 15, 7];
// const deleteDouble = (arr) => {
//   let result = [];
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };
// console.log(deleteDouble(arr));

// const arr0 = [1, 3, 6];
// const arr1 = [1, 3, 5];
// const arr2 = [1, 3, 5];

// const comparison = (arr1, arr2) => {
//   if (arr1.toString === arr2.toString) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(comparison(arr1, arr2));

// function compareArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) return false;
//     }

//     return true;
//   }

// Методы массивов Владилен=======================================================================

// const people = [
//   { name: "Евгений", age: 28, budget: 40000 },
//   { name: "Елена", age: 17, budget: 3400 },
//   { name: "Игорь", age: 49, budget: 50000 },
//   { name: "Михайл", age: 15, budget: 1800 },
//   { name: "Василиса", age: 24, budget: 25000 },
//   { name: "Алексей", age: 38, budget: 2300 },
// ];

// for:
// for (let i = 0; i < people.length; i += 1) {
//   console.log(people[i]);
// }

// For of:
// for (let person of people) {
//   console.log(person);
// }

// forEach:
// people.forEach((person) => console.log(person));

// Map:
// const newPeople = people.map((person) => {
//   return `${person.name} (${person.age})`;
// });
// console.log(newPeople);

// Необходимо отфильтровать всех кто больше 18:
// const newPeople = [];
// for (let i = 0; i < people.length; i += 1) {
//   if (people[i].age >= 18) {
//     newPeople.push(people[i]);
//   }
// }
// console.log(newPeople);

// Filter
// const newPeople = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });
// console.log(newPeople);

// const people = [
//   { name: "Евгений", age: 28, budget: 40000 },
//   { name: "Елена", age: 17, budget: 3400 },
//   { name: "Игорь", age: 49, budget: 50000 },
//   { name: "Михайл", age: 15, budget: 1800 },
//   { name: "Василиса", age: 24, budget: 25000 },
//   { name: "Алексей", age: 38, budget: 2300 },
// ];

// Просчитать общий бюджет:
// let count = 0;
// for (let i = 0; i < people.length; i += 1) {
//   count += people[i].budget;
// }
// console.log(count);

// Reduce
// const count = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0);
// console.log(count);

// Find
// const igor = people.find((person) => person.name === "Игорь");
// console.log(igor);

// // FindIndex
// const igorIndex = people.findIndex((person) => person.name === "Игорь");
// console.log(igorIndex);

// Задачки
// const people = [
//   { name: "Евгений", age: 28, budget: 40000 },
//   { name: "Елена", age: 17, budget: 3400 },
//   { name: "Игорь", age: 49, budget: 50000 },
//   { name: "Михайл", age: 15, budget: 1800 },
//   { name: "Василиса", age: 24, budget: 25000 },
//   { name: "Алексей", age: 38, budget: 2300 },
// ];

// // Отфильтровать по бюджету тех у кого больше 3000

// const amount = people
//   .filter((person) => person.budget > 3000)
//   .map((person) => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     };
//   })
//   .reduce((total, person) => total + person.budget, 0);
// console.log(amount);

// let arr = [];
// let arr2 = [];
// if (arr === arr2) {
//   console.log(arr, arr2);
// }
