// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const stack = ["React", "React native", "Next JS", "TypeScript"].map(
//   (item) => item.length
// );
// console.log(stack);

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
// Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает
// новый массив из такого же числа элементов, в котором на каждой позиции будет
// находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17];

// const currentSums = (numbers) => {
//   let newArr = [];
//   numbers.reduce((sum, current, i) => {
//     return (newArr[i] = sum + current);
//   }, 0);
//   return newArr;
// };
// console.log(currentSums(numbers));
// [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые
// в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// Решение взято из интернета и переделано под es6 самостоятельно решить не смог

// let num = 7;
// let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3];

// arr
//   .sort()
//   .reduce((prev, cur) => {
//     if (prev[prev.length - 1] != cur) {
//       prev.push(cur);
//     }
//     return prev;
//   }, [])
//   .forEach((e, i, ar) => {
//     if (ar.slice(i + 1).some((el) => el == num - e)) {
//       console.log(e, num - e);
//     }
//   });
// if (
//   arr.indexOf(num / 2) > -1 &&
//   arr.indexOf(num / 2) != arr.lastIndexOf(num / 2)
// ) {
//   console.log(num / 2, num / 2);
// }

// Перед вами переменная, содержащая строку.
// Напишите код, создащий массив, который будет состоять
//  из первых букв слов строки str.

// const str = "Каждый охотник желает знать, где сидит фазан.";
// const arrFirstLetters = (str) => {
//   let newArr = [];
//   newStr = str.split(" ").forEach((el) => {
//     newArr.push(el[0]);
//   });
//   return newArr;
// };
// console.log(arrFirstLetters(str));

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк,
// состоящих из предыдущего, текущего и следующего символа строки str.

// const str = "JavaScript";
// const strangeString = (str) => {
//   let newArray = [];
//   for (let i = 0; i < str.length; i += 1) {
//     newArray.push(str.substring(i - 1, i + 2));
//   }
//   return newArray;
// };
// console.log(strangeString(str));

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.

// const numerics = [5, 7, 2, 9, 3, 1, 8];
// const sortedArray = (arr) => {
//   return arr.sort((prev, next) => next - prev);
// };
// console.log(sortedArray(numerics));

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве,
// в порядке убывания их значений через пробел.

// const a = [1, 2, 3],
//   b = [4, 5, 6],
//   c = [7, 8, 9];
// const sortedArray = (a, b, c) => {
//   let result = a.concat(b, c);
//   return result.reverse();
// };
// console.log(sortedArray(a, b, c));

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным. Показать решение.

// const twoDimensionalArray = [[1, 2, 3], [4, 5], [6]];
// const sumArray = (arr) => {
//   let result = [].concat(...arr);
//   return result.reduce((acc, curr) => acc + curr);
// };
// console.log(sumArray(twoDimensionalArray));

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const freeDimensionalArray = [
//   // тут уже может находится любой многомерный массив с любой вложенностью
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// const sumArray = (arr) => {
//   let result = arr.flat(Infinity);
//   return result.reduce((acc, curr) => acc + curr);
// };
// console.log(sumArray(freeDimensionalArray));

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const numerics = [1, 2, 3, 4, 5, 6, 7];
// const sortedArray = (arr) => {
//   return arr.sort((prev, next) => next - prev);
// };
// console.log(sortedArray(numerics));

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти.

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [5, 5, 10];
// let sum = 0,
//   newArr = [];

// for (let i = 0; i < arr.length; i += 1) {
//   sum += arr[i];
//   if (sum < 10) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr.length + 1);

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение,
// которым заполнять массив, а вторым - сколько элементов должно быть в массиве.

const arrayFill = (x, count) => {
  let arr = [];
  for (var i = 1; i <= count; i += 1) {
    arr.push(x);
  }
  return arr;
};

console.log(arrayFill("x", 5));
