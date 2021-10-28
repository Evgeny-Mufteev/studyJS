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

// const trap = (str, str1, str2) => {
//   if (str.endsWith(str1)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(trap("Каждый охотник желает знать", "скрипт", "знать"));

// 16. Подстрока до/после указанного символа. Напишите функцию getSubstr(str, char, pos), которая
// возвращает часть строки, расположенную после или до указанного
// символа char в зависимости от параметра pos.

// const getSubstr = (str, char, pos) => {
//   let prog = str.indexOf(char);
//   if (pos === "отрезок") {
//     return str.slice(0, prog);
//   } else {
//     return str.slice(prog + 1);
//   }
// };

// console.log(getSubstr("Астрономия — Наука о небесных телах", "ах", "отрезок"));

// 17. Вставить подстроку в указанную позицию строки. Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// 1 вариант
// const insert = (str, substr, pos) => {
//   let result = [str.slice(0, pos), substr, str.slice(pos)].join("");
//   return result;
// };

// console.log(insert("один два", "три", 2));

// 2 вариант
// const insert = (str, substr, pos) => {
//   let newArr = str.split("");
//   console.log(newArr); // разбиваем строку на массив букв
//   newArr.splice(pos, 0, substr); // добавляем на указанную позицию второй аргумент (по умолчанию 0)
//   return newArr.join(""); // собираем массив
// };
// console.log(insert("один два", "три", 2));

// 18. Ограничить длину строки. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее
//  указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...»
//  (если не задан параметр symb) или заданным символом symb.

// const limitStr = (str, n, symb) => {
//   if (str.length <= n) {
//     return str + symb;
//   }
//   str = str.slice(0, n) + "...";
//   return str;
// };

// console.log(limitStr("один два", 9, "$"));

// 19. Количество вхождений символа в строке. Напишите функцию count(str, stringsearch), которая
// возвращает количество символов stringsearch в строке str.

// const count = (str, stringsearch) => {
//   newStr = str.split(" ").join("");
//   arrStr = newStr.split("");
//   let counter = 0;
//   for (let i = 0; i < arrStr.length; i += 1) {
//     if (arrStr[i] === stringsearch) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(count("Астрономия это наука о небесных объектах", "о"));

// 21. Удалить лишние пробелы из строки. Напишите функцию strip(str), которая удаляет
// все лишние пробелы из строки str.

// const strip = (str) => {
//   newStr = str.trim();
//   return newStr.replace(/\s+/g, " ");
// };

// console.log(strip("    Max is a good      boy     "));

// 23. Удалить лишние слова из строки. Напишите функцию cutString(str, n), которая удаляет
// лишние слова из строки str, оставив в ней n слов.

// const cutString = (str, n) => {
//   return str.split(" ").splice(0, n).join(" ");
// };

// console.log(cutString("Сила тяжести приложена к центру масс тела", 2));

// 24. Найти слово в строке. Напишите функцию findWord(word, str), которая проверяет,
// существует ли в строке str слова word.

// const findWord = (str, word) => {
//   return str.includes(word);
// };
// console.log(findWord("abc def ghi jkl mno pqr stu", "pqr"));
