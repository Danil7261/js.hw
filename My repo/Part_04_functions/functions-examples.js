//FD

// function sayHello (){
// console.log('Hello world');
// }

// sayHello()
// sayHello()//вызов сколько угодно раз
// sayHello()


// Prameters - это ним и ним 

// function sum(number_1, number_2){
// console.log(number_1 + number_2);
// }

// //Arguments - это 5 и 10
// sum( 5, 10);2

// function LeapYear(year){ //данная функция смотрит первое верное вхождение и с помощью
//     //РЕТУРН заканчивает функцию на верном результате
//     if (year % 4 === 0){
//         return true;
//     }
//     return false;
// }

// // let result = LeapYear(2021)
// // console.log(result); первый вариант вывода в консоль
// console.log(LeapYear(2020)); // второй способ 

const emails = ['admin@gmail.com',  'tester@gmail.com', 'pm@gmail.com']
const anotherEmail = 'vova@gmail.com';

function checkEmail(emailArray, email){
if(emailArray.includes(email)){
    return true;
}
return false;
}
let isStatus = checkEmail( emails, anotherEmail );
if(isStatus){
    console.log('Hello employee')
} else {
    console.log('Hello guest')
}

// console.log(isStatus);