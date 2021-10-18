"use strict";

window.onload = function () {
  // 1) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
  let squareNumber = (el) => {
    return el * el;
  };
  console.log(squareNumber(42));

  //   2) Сделайте функцию, которая возвращает сумму двух чисел.
  let sum = (el) => {
    return el + el;
  };
  console.log(sum(42));

  //   3) Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
  let example = (one, two, free) => {
    return (one - two) / free;
  };
  console.log(example(10, 5, 2));

  // 4) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
  let dayWeek = (el) => {
    switch (el) {
      case 1:
        return "Понедельник";
        break;
      case 2:
        return "Вторник";
        break;
      case 3:
        return "Среда";
        break;
      case 4:
        return "Четверг";
        break;
      case 5:
        return "Пятница";
        break;
      case 6:
        return "Суббота";
        break;
      case 7:
        return "Воскресенье";
        break;
      default:
        return "Не корректное значение";
        break;
    }
  };
  console.log(dayWeek(5));

  // 5) Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет
  // true, а если не равны - false.
  let logicalReturn = (num1, num2) => {
    if (num1 === num2) {
      return true;
    } else {
      return false;
    }
  };
  console.log(logicalReturn(5, 6));

  //   6) Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
  //   больше 10 - пусть вернет true, а если нет то - false.
  let sumSum = (num1, num2) => {
    if (num1 + num2 > 10) {
      return true;
    } else {
      return false;
    }
  };
  console.log(sumSum(5, 6));

  // 7)  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
  // Если отрицательное - пусть функция вернет true, а если нет - false.

  let example2 = (el) => {
    if (el < 0) {
      return true;
    } else {
      return false;
    }
  };
  console.log(example2(-2));

  // 8) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
  // Если это так - пусть функция возвращает true, если не так - false.

  //   let isNumberInRange = (el) => {
  //     if (el > 0 && el < 10) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };
  //   console.log(isNumberInRange(11));

  // 9) Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
  // Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

  let isNumberInRange = (arr, el) => {
    if (arr > 0 && arr < 10) {
      return true;
    } else {
      return false;
    }
    for (let i = 0; i < arr.lenght; i++) {}
  };
};
