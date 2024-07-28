
/*
function userGreeting(lastUserName, firstUserName, userAge) {
    alert(`Привет ${lastUserName} ${firstUserName} с возрастом ${userAge}`)
}
const lastUserName = prompt('введите свое Имя')
const firstUserName = prompt('введите свою Фамилию')
const userAge = +prompt('введите свой возраст')
userGreeting(lastUserName, firstUserName, userAge)
*/

/*
function degree(x) {
    return x ** 2
}
// или
const degree = (x) => x ** 2
let x = +prompt('Введите цифру')
alert(degree(x))
*/

/*
function checker(x) {
    if (x > 0) {
        return '+++'
    } else (x < 0)
    return '---'
}

const checker = (x) => {
    if (x > 0) {
        return '+++'
    } else (x < 0)
    return '---'
}
let x = +prompt('Введите цифру')
alert(checker(x))
*/

/*
let param1 = '1';
let param2 = 2;
let param3 = 3;

const sumNambers = (num1, num2, num3) => {
    console.log(Number(num1) + Number(num2) + Number(num3));
}
sumNambers(param1, param2, param3);
*/

/*
const lastNumbers = 3;
const firstNumbers = 4;

alert(`корень первого чиста 3 равен ${(Math.sqrt(lastNumbers))}`);
alert(`корень второго числа 4 равен ${(Math.sqrt(firstNumbers))}`);

const sumNum = (lastNumbers, firstNumbers) => {
    console.log(`сумма двух корней ровна ${(Math.sqrt(lastNumbers)) + (Math.sqrt(firstNumbers))}`);
}
const minNum = (lastNumbers, firstNumbers) => lastNumbers < firstNumbers ? ` первое число ${lastNumbers} меньше второго числа` : firstNumbers;
console.log(minNum(lastNumbers, firstNumbers));
sumNum(lastNumbers, firstNumbers)
*/

/*
let dayOfWeek = +prompt('Введите чило от 1 до 7: ', 1)
function getNameOfDayOfWeek(day) {
    if (isNaN(day) || day < 1 || day > 7) {
        alert('не верные данные')
    } else {
        const namesOfDayWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
            'Пятница', 'Суббота', 'Воскреенье']
        return namesOfDayWeek[day - 1]
    }
}
alert(`Вы указали ${getNameOfDayOfWeek(dayOfWeek)}`)
*/

/*
const timeGreetings = (name, time) => {
    let hour = time.getHours()
    let greetings = ''
    if (hour >= 6 && hour >= 10) {
        greetings = 'morning'
    } else if (hour >= 11 && hour <= 16) {
        greetings = 'day'
    } else if (hour >= 17 && hour <= 22) {
        greetings = 'evening'
    } else {
        greetings = 'night'
    }
    msg = `Good ${greetings}, ${name}`
}

console.log(timeGreetings('name', new Date()))
*/

/*
function AskPuzzle(puzzle, answer) {
    let answerUser;

    do {
        answerUser = prompt(`${puzzle}`).toLowerCase()

        if (answerUser !== answer) {
            alert('подумай, я даю подсказку......');
            alert('всегда пожалуйста')
        } else {
            alert('молодец')
        }
    } while (answerUser !== answer)
}
AskPuzzle('зимой и летом однм цветом', 'елка')
*/



//HW 3

/*
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени

const degree = (num) => num ** 3;
console.log(degree(2) + degree(3));
*/

/*
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


let userSalary = Number(prompt('введите вашу заработную плату'))
const percent = (num) => num - (num * 13 / 100)

if (isNaN(userSalary)) {
    console.log('значение указанно не верно');
} else console.log(`Размер заработной платы за вычетом налогов равен ${percent(userSalary)} `);
*/

/*
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let number1 = +prompt('Введите первое число: ')
let number2 = +prompt('Введите второе число: ')
let number3 = +prompt('Введите третье число: ')

const maxNambers = (number1, number2, number3) => Math.max(number1, number2, number3)
console.log(maxNambers(number1, number2, number3));
*/


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль(sum - функция сложения в данном примере, ваши названия функций могут отличаться).Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


let userInputNum1 = Number(prompt('введите первое число '));
let userInputNum2 = Number(prompt('введите второе число '));

const sumNum = (userInputNum1, userInputNum2) => userInputNum1 + userInputNum2;
const difNum = (userInputNum1, userInputNum2) => {
    if (userInputNum1 === userInputNum2) return 0;
    return (userInputNum1 > userInputNum2) ? userInputNum1 - userInputNum2 : userInputNum2 - userInputNum1;
}

const multiplicationNum = (userInputNum1, userInputNum2) => userInputNum1 * userInputNum2;
const divisionNum = (userInputNum1, userInputNum2) => userInputNum1 / userInputNum2;

console.log(`сумма чисел равна ${sumNum(userInputNum1, userInputNum2)}`);
console.log(`разность чисел равна ${difNum(userInputNum1, userInputNum2)}`);
console.log(`умножение чисел равно ${multiplicationNum(userInputNum1, userInputNum2)}`);
console.log(`деление чисел равно ${divisionNum(userInputNum1, userInputNum2)}`);