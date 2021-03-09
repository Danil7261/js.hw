//Array
// let arr = [];// [] 
// console.log(arr.constructor)

// let str = 'Vova' 

// Array.isArray([]) - проверка на массив

// Array Lenght - проверка на длину
// let arr = [dghghfghf, ugfuguf, gfghf]
// console.log(arr.length);

//Обратиться по индексу
// let index = arr[число массива]
// console.log(index);

//Найти индекс
// let arr = [ та та та та та]
// let value = arr.indexOf(та)

//изменять массив
// let fruits = ['apple', 'pear', 'orange'];
// fruits.push()// это добавит в конец массива
// fruits.push('Vova')
// fruits.pop() // удаляет последний элемент с конца
// // fruits.shift() удалить первый элемент
// // fruits.unshift() добавить в начало
// console.log(fruits);

//Splice удалить любой элемент массива 
//[].splice()
// let numbers = [23, 34, 5456, 5, 21];
// let newArr = numbers.splice(1, 2) //удалит два элемент после первого 34 и 5456
// let newArr = numbers.splice(1, 1) //удалит один элемент после первого 34
// console.log(newArr)

//конкатенация - слияние массивов
// [].concat();
// let numbers = [23, 34, 5456, 5, 21];
// let fruits = ['apple', 'pear', 'orange'];
// let concatArr = [...numbers, ...fruits];
// console.log(concatArr);

//Поиск в массиве
//1.[].indexOf()
//2.[].includes()
// let numbers = [23, 34, 5456, 5, 21];
// let result = numbers.includes(34)
// console.log(result);
//

//Преобразование в массив

// let arr = Array.from('hello')
// arr = Array.from('45324532')

// //либо Spread оператор
// arr = [...'Vova']
//  console.log(Array.isArray(arr));

//Преобразовать в строку
// let arr = ['hello', 'world', 'js', 'react'];
// // arr.reverse()
// let str = arr.join();
// let newArr = str.split(' ')
// console.log(newArr)
// //split // строку в массив
//reverse //развернуть массив
//join // соеденить обратно в строку


// let hello = 'hello world';
// let reversedString = hello.split(' ').reverse().join(' ');
// console.log(reversedString)

// let arr = ['hello', 'world', 'js', 'react'];
// let result = arr.toString();
// console.log(result)