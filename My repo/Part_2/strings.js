// let firstName = 'John'
// let lastName = 'Dou'

// let person = firstName + lastName
 //person = `${firstName} ${lastName}`
// console.log(person)

//Append - накаплевоние переменных

// let data = 'John'
// data += 'Dou'
// data += 'JavaSkript'
// console.log(data)
// // let text = 'Don't worry be happy'
// let text = "Don't worry be happy"
// console.log(text) 

//lenght
// let text = "Don't worry be happy"
// console.log(text.length);

// //Concat
// let firstName = 'John'
// let lastName = 'Dou'
// let userData = firstName.concat(lastName)
// console.log(userData)

//Get symbol
// let firstName = 'John'
// console.log(firstName[1])
// console.log(firstName[2])

//Get last symbol
// let firstName = "Don't worry be happy"
// let lastSymbol = firstName[firstName.length -1]
// console.log( lastSymbol)

// //Slice
// let firstName = 'JavaSkript'
// let value = firstName.slice(0, 4) - //  в консоли будет написано Java( от 0 - j до 4 - a)
// let value = firstName.slice(4) - //  в консоли будет написано kript( обрежет все, что было до 4 символа)
// console.log(value)

//Substring
// let firstName = 'JavaSkript'
// let value = firstName.substring(0, 4) // тоже, что  и метод Slice
// console.log(value)

//Includes - проверка, есть ли в тексте JavaScript слово pizza(например для модерации спамов)
// let str = 'JavaSkript'
// let value = str.includes('pizza') // false
// let value = str.includes('Script') // true
// console.log(value)

//Replace - заменить одно слово другим(например для модерации матов)
// let str = 'JavaScript'
// let value = str.replace('JavaScript', 'Java')
// console.log(value)

//UpperCase, LowerCase  
// let post = 'GGghghgjgh';
// let moderated = post.toLowerCase(); // сделать все мелкньким
// moderated = post.toUpperCase()//сдлеать все большим
// post.toLocaleUpperCase()//делать преобразование с учетом настройки системы
// post.toLocaleLowerCase()//делать преобразование с учетом настройки системы
// console.log(moderated)