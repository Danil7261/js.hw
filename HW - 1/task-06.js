let input;
let total = 0;


do {
    input = prompt("Введите число");
    if (input === '' || isNaN(input)) {
        alert('Вы ввели не число!')
    } else {
        total = total + Number(input);
    }
} while (input);

alert(`Общая сумма чисел равна ${total}`);

while (true) {
    input = prompt("Введите число");
    if (input === '' || isNaN(input)) {
        alert('Вы ввели не число!')
    } else {
        total = total + Number(input);
    }
    if (input == null) break
}

alert(`Общая сумма чисел равна ${total}`);