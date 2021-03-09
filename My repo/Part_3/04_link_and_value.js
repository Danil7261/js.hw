// let friend = 'Vova';
// console.log(friend);
// let girlfriend = 'Sara';
// // console.log(girlfriend);

//ссылочные типы
let a = [1,2,3];
//a = null - удалить массив
let b = a;
b.push(4)

let c = [1,2,3,4]

console.log('a', a)
console.log('b', b);
console.log(a === b);
console.log(a === c);