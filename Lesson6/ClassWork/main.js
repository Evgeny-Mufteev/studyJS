// const evenNite = (num) => {
//   num = String(num);

//   for (let i = 0; i < num.lenght; i++) {
//     let sum = 0;
//     sum += +num[i];
//   }
//   if (sum > 9) {
//     return evenNite(sum);
//   } else {
//     return sum;
//   }
// };

// console.log(evenNite(24));

// Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект
// должен содержать свойства с названием фильма, с датой выпуска, именем
// режиссера и страной выпуска.
// ● Добавить свойство содержащее значение выручки фильма в прокате.
// ● Добавить метод, который который будет выводить название фильма в консоль.
// ● Удалить свойство содержащее год выпуска.
// ● Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.

// let myFavoriteFilm = {
//   title: "Джон Уик",
//   releaseYear: 2018,
//   director: "John Travolta",
//   county: 2016,
// };

// myFavoriteFilm.profit = 25000;
// console.log(myFavoriteFilm);

// 1 вариант со стрелочной
// myFavoriteFilm.getTitle = () => {
//   console.log(myFavoriteFilm.title);
// };
// myFavoriteFilm.getTitle();

// 2 вариант со декларейшен
// myFavoriteFilm.getTitle = function () {
//   console.log(myFavoriteFilm.title);
// };
// myFavoriteFilm.getTitle();

// delete myFavoriteFilm.county;
// console.log(myFavoriteFilm);

// Реализовать функцию которая будет принимать числовой диапазон в качестве
// параметров [min, max] и будет возвращать случайное целое число
// из данного диапазона.

let example = (min, max) => {
  let integer = Math.random() * (max - min) + min;
  return Math.floor(integer);
};
console.log(example(1, 100));

// Реализовать функцию которая будет определять, в каком регистре записан n элемент
// переданной строки, если в верхнем то вернуть true, в противном случае
// вернуть false.

let isUpperCase = (str, n) => {
  let char = str[n];
  if (char === char.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(isUpperCase("JavaScript", 4));

// Реализовать функцию которая заменяет в строке str, все вхождения
// подстроки find, на подстроку replace.

// let replaceStr = (str, find, replace) => {

// }

// replaceStr ()
