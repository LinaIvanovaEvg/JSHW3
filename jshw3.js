// Task1

// let start = prompt("Введите начальное число диапазона");
// if (start === null || start === "" || isNaN(+start)) {
//   alert("Вы не ввели начальное число диапазона");
// } else {
//   let finish = prompt("Введите конечное число диапазона ");
//   if (finish === null || finish === "" || isNaN(+finish)) {
//     alert("Вы не ввели конечное число диапазона");
//   } else {
//     if (Math.abs(finish - start) + 1 < 5) {
//       alert("Длина диапазона меньше 5, введите корректные данные");
//     } else {
//       const arr = [];
//       if (+finish > +start) {
//         for (let i = +start; i <= +finish; i++) {
//           arr.push(i);
//         }
//       } else {
//         for (i = +start; i >= +finish; i--) {
//           arr.push(i);
//         }
//       }
//       console.log(arr);
//     }
//   }
// }

// Task2

// function GetPinPuk(pin, puk) {
//   let i = 1;
//   while (i <= 3) {
//     const getPIN = prompt(`Введите PIN`);
//     if (getPIN === null) {
//       alert(`Ввод отменен пользователем`);
//       break;
//     } else if (getPIN === pin) {
//       return alert("Добро пожаловать!");
//     } else if (i < 3) {
//       alert(`Неверно, повторите попытку, осталось попыток ${3 - i}`);
//       i++;
//     } else {
//       i++;
//       alert(`Все попытки для PIN исчерпаны, введите PUK`);

//       let n = 1;
//       while (n <= 3) {
//         const getPUK = prompt("Введите PUK");
//         if (getPUK === null) {
//           alert(`Ввод отменен пользователем`);
//           break;
//         } else if (getPUK === puk) {
//           return alert("Добро пожаловать!");
//         } else if (n < 3) {
//           alert(`Неверно, повторите попытку , осталось попыток ${3 - n}`);
//           n++;
//         } else {
//           n++;
//           alert(`Все попытки для PUK исчерпаны, доступ закрыт`);
//         }
//       }
//     }
//   }
// }
// GetPinPuk("linka", "dimon");

// Task3

// let getHundred = "";
// let even = "";
// let plus = "";
// const getNumStart = prompt("Введите начальное число диапазона");
// let i = +getNumStart;
// function AboutNumber() {
//   if (i > 100) {
//     getHundred = "больше ста,";
//   } else if (i < 100) {
//     getHundred = "меньше ста,";
//   } else if (i === 100) {
//     getHundred = "сто,";
//   }
//   if (i % 2 === 0) {
//     even = "четное,";
//   } else {
//     even = "нечетное,";
//   }
//   if (i > 0) {
//     plus = "положительное.";
//   } else if (i < 0) {
//     plus = "отрицательное.";
//   } else if (i === 0) {
//     plus = "ноль.";
//   }
//   return console.log(`${i} -  ${getHundred} ${even} ${plus}`);
// }
// if (isNaN(+getNumStart) || getNumStart === "") {
//   alert("Введите корректное значение для начального числа диапазона");
// } else if (getNumStart === null) {
//   alert(`Ввод отменен пользователем`);
// } else {
//   const getNumEnd = prompt("Введите конечное число диапазона");
//   if (isNaN(+getNumEnd) || getNumEnd === "") {
//     alert("Введите корректное значение для конечного числа диапазона");
//   } else if (getNumEnd === null) {
//     alert(`Ввод отменен пользователем`);
//   } else {
//     if (+getNumStart < +getNumEnd) {
//       for (i = +getNumStart; i <= +getNumEnd; i++) AboutNumber();
//     } else {
//       for (i = +getNumStart; i >= +getNumEnd; i--) AboutNumber();
//     }
//   }
// }

// // Task4
// let n = 1;
// const getNumStart = prompt("Введите начальное число диапазона");
// if (isNaN(+getNumStart) || getNumStart === "") {
//   alert("Введите корректное значение для начального числа диапазона");
// } else if (getNumStart === null) {
//   alert(`Ввод отменен пользователем`);
// } else {
//   const getNumEnd = prompt("Введите конечное число диапазона");
//   if (isNaN(+getNumEnd) || getNumEnd === "") {
//     alert("Введите корректное значение для конечного числа диапазона");
//   } else if (getNumEnd === null) {
//     alert(`Ввод отменен пользователем`);
//   } else {
//     if (+getNumStart < +getNumEnd) {
//       for (let i = +getNumStart; i <= +getNumEnd && n <= 7; i++ && n++) {
//         console.log(`${i}-№${n}`);
//       }
//     } else {
//       for (i = +getNumStart; i >= +getNumEnd && n <= 7; i-- && n++) {
//         console.log(`${i}-№${n}`);
//       }
//     }
//   }
// }
