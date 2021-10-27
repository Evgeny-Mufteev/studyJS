// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const stringToarray = (str) => {
//   let arrayWord = str.split(" ");
//   return arrayWord;
// };

// console.log(stringToarray("Каждый охотник желает знать"));

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const deleteCharacters = (str) => {
//   return str.slice(2, 9);
// };
// console.log(deleteCharacters("Каждый охотник желает знать"));

// 3. Вставить тире между словами строки. Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента
// и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const insertDash = (str) => {
//   let upperCase = str.toUpperCase();
//   return upperCase.replaceAll(" ", "-");
// };
// console.log(insertDash("HTML JavaScript CSS"));

// 4. Сделать первую букву строки прописной. Напишите функцию, которая принимает строку в качестве аргумента
// и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const string = (el) => {
//   let elString = el[0].toUpperCase();
//   return elString + el.substring(1);
// };

// console.log(string("string not starting with capital"));

// 5. Первая буква каждого слова заглавная. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается
// с заглавной буквы.

// const capitalize = (str) => {
//   let strArray = str.split(" ");
//   for (let i = 0; i < strArray.length; i += 1) {
//     console.log(strArray[i]);
//     strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
//   }
//   return strArray.join(" ");
// };
// console.log(capitalize("каждый охотник желает знать"));

// 6. Смена регистра символов строки. Напишите функцию change_register(str), которая принимает в качестве аргумента строку
// и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК»,
// то на выходе должно быть «кАжДыЙ оХоТнИк».

// const changeRegister = (str) => {
//   let string = "";
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === str[i].toUpperCase()) {
//       string = string + str[i].toLowerCase();
//     } else {
//       string = string + str[i].toUpperCase();
//     }
//   }
//   return string;
// };

// console.log(changeRegister("КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"));

// 7. Удалить все не буквенно-цифровые символы. Напишите функцию remove_char(str), которая возвращает строку, очищенную от
// всех не буквенно-цифровых символов.

// const removeChar = (str) => {
//   let newStr = "";
//   newStr = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
//   return newStr;
//   // копипаст из интернета тк регулярки не проходили
// };
// console.log(removeChar("every., -/ hunter #! wishes ;: {} to $ % ^ & * know"));

// 8. Нулевое заполнение строки. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с
// // дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// const zeros = (num, len, sign) => {
//   if (num.toString().length === len) {
//     return sign + String(num);
//   } else {
//     return zeros("0" + num, len, sign);
//   }
// };

// console.log(zeros(42, 21, "+"));

// const zeros = (num, len, sign = '') => num.toString().length === len ? sign + String(num) : zeros('0' + num, len, sign)

// 9. Сравнение строк без учёта регистра. Напишите функцию comparison(str1, str2), которая
// сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => {
//   if (str1.toLowerCase() === str2.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(comparison("QWerTy", "qwERtY"));

// 10. Поиск без учета регистра. Напишите функцию insensitive_search(str1, str2), которая осуществляет
//  поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitiveSearch = (str1, str2) => {
//   let substringSearch = str1.toUpperCase().includes(str2.toUpperCase());
//   return substringSearch;
// };

// console.log(insensitiveSearch("На сколько сложен React?", "React?"));

// 11. ВерблюжийРегистр (CamelCase) Напишите функцию initCap(str), которая преобразует стиль написания
// составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов,
// при этом каждое слово внутри строки пишется с заглавной буквы.

// const initCap = (str) => {
//   let arrStr = str.toLowerCase().split(" ");
//   for (let i = 0; i < arrStr.length; i += 1) {
//     arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].substr(1);
//   }
//   let newStr = arrStr.join("");
//   console.log(newStr);
// };

// initCap("hello world");

// 12. Змеиный_регистр (snake_case). Напишите функцию initSnake(str), которая преобразует стиль написания составных
// слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_),
// причём каждое слово пишется с маленькой буквы.

// const initSnake = (str) => {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.replaceAll(" ", "_");
// };
// console.log(initSnake("hEllo woRld"));

// 13. Повторить строку n раз. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую
//  определённое количество раз.

// const repeatStr = (str, n) => {
//   let newStr = "";
//   for (let i = 0; i < n; i += 1) {
//     newStr = newStr + str;
//   }
//   return newStr;
// };
// console.log(repeatStr("React", 42));

// 14. Получить имя файла. Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const path = (pathname) => {
//   let newPathname = pathname.split("/").pop();
//   return newPathname;
// };
// console.log(path("/home/user/dir/file.txt"));

// 15. Заканчивается ли строка символами другой строки. Создайте метод объекта String endsWith(),
// который сравнивает подстроку str1 с окончанием исходной строки str
// и определяет заканчивается ли строка символами подстроки.

const str = "Каждый охотник желает знать";
const str1 = "скрипт";
const str2 = "знать";

String.prototype.endsWith = function (substring) {
  let arr = this.split(" ");
  if (arr[arr.length - 1] === substring) {
    return true;
  } else {
    return false;
  }
};
