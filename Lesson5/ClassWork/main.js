// const userName = prompt("Введите имя");

// function showMessage(userName = "гость") {
//   alert(`Hello ${userName}`);
// }
// showMessage(userName);

// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень,
// в которую надо возвести первый аргумент. По умолчанию, второй аргумент единица.

// const number = +prompt("Введите число"),
//   degree = +prompt("Ведите сепень в которое нужно возвести число");

// function row(number, degree) {
//   return number ** degree;
// }

// alert(row(number, degree));

// Написать функцию, которая будет принимать в качестве входного параметра массив
// любых, целых чисел, и будет возвращать среднее арифметическое значение
// данного массива*.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   sum = 0,
//   ave = 0;

// function average(array, sum, ave) {
//   for (i = 0; i <= array.length - 1; i += 1) {
//     sum = array[i] + sum;
//   }
//   retern  sum / array.length;
// }

// average()

// Напишите стрелочную функцию которая будет выводить переданную строку
// в консоль n раз.

// let example = (string, count) => {
//   for (let i = 0; i < count; i += 1) {
//     console.log(string);
//   }
// };
// example("london", 555);

// Напишите стрелочную функцию, которая будет принимать в качестве параметра
// букву и если она гласная, функция будет  возвращать true, в противном
// случае false.

// let task2 = (letter) => {
//   if (
//     letter === "а" ||
//     letter === "о" ||
//     letter === "э" ||
//     letter === "е" ||
//     letter === "и" ||
//     letter === "ы" ||
//     letter === "у" ||
//     letter === "ё"
//   ) {
//    return(true);
//   } else {
//     return(folse);
//   }
// };

// task2("у");

// let task2 = (letter) => {
//   let arrLetter = ["а", "о", "э", "е", "и", "ы", "у", "ё", "ю", "я"];

//   for (let i = 0; i <= arrLetter.length; i += 1) {
//     if (arrLetter[i] === letter) {
//       return(true);
//     } else {
//       return(false);
//     }
//   }
// };
// task2("с");

// Напишите стрелочную функцию, которая будет возвращать true если строка
// является палиндромом и false в противном случае.

let palindrome = (string) => {
  let letter = "";
  for (let i = 0; i >= letter.length; i -= 1) {

  }

  //   if () {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
};
palindrome("дед");
