// //this = user
// let user = {
//     name:"Sara",
//     age: 20,
//     getUserinfo(){
//         console.log(this)
//         console.log(this.name);
//     }
// }
// user.getUserinfo()

//user['age']
//user['name']                     это второй вариант вызова
//console.log(user['age']);

// let feetback ={
//     good: 5,
//     bad: 30,
//     normal: 2
// }
//Динамическое заполнение параметров
let feed = ['good', 'bad', 'normal']
function getFetback(arrFeed, stars){
    let feetback = {}
    for (let rate of arrFeed){
        feetback[rate] = stars
    }
    return feetback
}
console.log((getFetback(feed, 4)));