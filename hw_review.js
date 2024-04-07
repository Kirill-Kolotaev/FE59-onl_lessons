// !!Создавайте ПР так как в чате ваша домашка может просто затеряться, а ПР я посмотрю в любом случае
// Молодцы, что гуглите и продолжайте гуглить

// Задача 1.
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).

// let count = 0; // это лучше размещать в теле функции чтоб не засорять глобальную область видимости

// Решение
// const getSum = (num) => {
//   let count = 0;

//   for (let i = 0; i <= num; ++i) {
//     count = count + i;
//     console.log(count);
//   }
// };
// getSum(100);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 2.
// Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не
// увеличивается.

// Решение
// const totalCredit = (sumCredit) => {
//   const year = 5;
//   const percent = 17;
//   //return (((sumCredit / year) * percent) / 100) * 5; // здесь ошибка
//   return ((sumCredit * percent) / 100) * 5; // вот так правильно
// };
// console.log(totalCredit(1000));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 3.
// Написать функцию trimString , которая в качестве аргумента принимает три
// параметра:
// строку
// значение «от»
// значение «по»
// После вызова функция должна вернуть переданную строку, обрезанную по
// значениям «от» и «по».

// Решение
// const trimString = (str, from, to) => {
//   return str.slice(from, to);
// };
// console.log(trimString(`crocodile`, 3, 7));
// console.log(trimString(`crocodile`, 0, 5));
// console.log(trimString(`crocodile`, 1, 5));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 4.
// Написать функцию getSumNumbers . Она будет принимать число и вычислять
// сумму цифр, из которых состоит число. Для 2021 это будет 5.

// Решение
// const getSumNumbers = (yourNum) => {
//   let result = 0;
//   let yourNumFromString = yourNum.toString();
//   for (let i = 0; i < yourNumFromString.length; i++) {
//     result += Number(yourNumFromString[i]);
//   }
//   return result;
// };
// console.log(getSumNumbers(2021));
// console.log(getSumNumbers(123445));
// console.log(getSumNumbers(999));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 5.
// Написать функцию getSum , которая принимает два целых числа a и b, они могут
// быть положительными или отрицательными, найти сумму всех чисел между
// ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
// getSum(1, 0) == 1 // 1 + 0 = 1
// getSum(1, 2) == 3 // 1 + 2 = 3
// getSum(0, 1) == 1 // 0 + 1 = 1
// getSum(1, 1) == 1 // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2

// не учтено вот это требование "Если два числа равны, верните a или b."

// Решение
// const getSum = (a, b) => {
//   const start = Math.min(a, b);
//   const end = Math.max(a, b);
//   let countSum = 0;
//   for (let i = start; i <= end; ++i) {
//     countSum += i;
//   }
//   return countSum;
// };
// console.log(getSum(-1, 2));
// console.log(getSum(-3, 3));
// console.log(getSum(-5, 10));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 6.
// Напишите функцию fooBoo которая принимает в качестве аргумента три
// параметра:
// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true , то запускаем функцию foo, иначе boo.

// Функция fooBoo должна принимать в качестве аргументов в том числе две функции
// Вместо bool === true можно просто bool

// Решение
// const funFoo = () => {
//   console.log(`Foo`);
// };

// const funBoo = () => {
//   console.log(`Boo`);
// };

// const fooBoo = (bool, firstFunc, secondFunc) => {
//   return bool ? firstFunc() : secondFunc();
// };
// fooBoo(true, funFoo, funBoo);
// fooBoo(false, funFoo, funBoo);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Продвинутый уровень
// Задача 1.
// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true , если треугольник можно построить со
// сторонами заданной длины, и false в любом другом случае.

//Решение
// const triangle = (a, b, c) => {
//   if (a <= 0 || b <= 0 || c <= 0) {
//     return false;
//   }

//   // if (a + b > c && a + c > b && b + c > a) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return a + b > c && a + c > b && b + c > a;
//};
//console.log(triangle(1, 2, 2));
//console.log(triangle(1, 2, 2.5));
//console.log(triangle(1, 2, 3));
//console.log(triangle(1, 2, 55));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 2.
// Ваша задача - разбить плитку шоколада заданного размера n x m на
// маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть
// разбит. Реализуйте функцию, которая будет возвращать минимальное
// количество необходимых надломов.
// Например, если вам дается плитка шоколада размером 2 x 1, вы можете
// разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x
// 1 вы должны сделать два надлома.
// Если входные данные недействительны, вы должны вернуть 0 (поскольку
// надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда
// будет неотрицательным целым числом.

//передаешь в фунцию параметр/аргумент но не используешь его а используешь из глобальной области видимости

//Решение
// function chocolate(n, m) {
//   if (n <= 0 || m <= 0) {
//     return 0;
//   } else {
//     return n * m - 1;
//   }
// }

// console.log(chocolate(2, 1));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// Задача 3.
// Напишите программу для вычисления общей стоимости покупки телефонов.
// Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не
// закончатся деньги на банковском счете. Вы также будете покупать аксессуары
// для каждого из телефонов.
// После того как вы посчитаете сумму покупки, прибавьте налог, затем выведите
// на экран вычисленную сумму покупки, правильно отформатировав её.
// Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять,
// можете вы себе это позволить или нет.
// Вы должны настроить некоторые константы для «ставки налога», «цены
// телефона», «цены аксессуара», так же как и переменную для вашего «баланса
// банковского счета».
// Вам следует определить функции для вычисления налога и для
// форматирования цены со знаком валюты и округлением до двух знаков после
// запятой.
// Попробуйте включить ввод данных в вашу программу, например с помощью
// функции prompt(...) . Вы можете, например, запросить у пользователя баланс
// банковского счета. Развлекайтесь и будьте изобретательны!

// let phonePrice = 400;
// let accessoryPrice = 50;
// const taxRate = 0.1;
// let bankAccountBalance = 1000;

// function calculateTax(amount) {
//   return amount * taxRate;
// }

// function formatPrice(price_formatting) {
//   return "$" + price_formatting.toFixed(2);
// }

// while (bankAccountBalance > 0) {
//   // let numPhones = prompt("Сколько телефонов Вы хотите купить?");
//   let numPhones = 3;
//   if (numPhones === null) {
//     break;
//   }

//   let totalPhonePrice = phonePrice * numPhones;
//   let totalAccessoryPrice = accessoryPrice * numPhones;
//   let totalPurchaseAmount = totalPhonePrice + totalAccessoryPrice;
//   totalPurchaseAmount += calculateTax(totalPurchaseAmount);
//   // confirm("Стоимость покупки: " + formatPrice(totalPurchaseAmount) + " Оставшийся баланс: " + formatPrice(bankAccountBalance - totalPurchaseAmount));
//   if (totalPurchaseAmount > bankAccountBalance) {
//     console.log(
//       "У Вас недостаточно средств для покупки " + numPhones + " телефонов."
//     );
//     bankAccountBalance -= totalPurchaseAmount;
//     break;
//   } else {
//     console.log(
//       "Вы успешно приобрели " + numPhones + " телефонов с аксессуарами"
//     );
//   }
//   break;
// }