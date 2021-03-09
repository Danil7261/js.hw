let input;
input = prompt('Введите случайное число')
const numbers = [];
let total = 0;
for (let i = 0, sum = 0; i < numbers.length; sum += numbers[i+=1])
  
  alert(`Общая сумма чисел равна ` + total);
function start() {
    const numbers = [];
  
    while (true) {
      let input = prompt("Введите число");
      if (input == null) break;
  
      input = Number.parseInt(input);
      if (!Number.isNaN(input)) {
        numbers.push(input);
      } else {
        alert('Было введено не число, попробуйте еще раз');
      }
    }
    if (numbers.length > 0) {
      let total = 0;
      for (const iterator of numbers) {
        total += iterator;
      }
  
      console.log('Общая сумма чисел равна ' + total);
      alert('Общая сумма чисел равна ' + total);
    }
  
  }
  
  start();