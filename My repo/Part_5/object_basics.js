//Object{ }
//JSON


//Properties, fields, свойства

let car = {
    speed: 60,
    maxSpeed: 200,
    power: 150,
    
    getSpecs() {
        console.log('Car');
    }
}

car.manufacturer = 'Audi'
console.log(car);

delete car.manufacturer
// console.log(car);
// console.log(car.getSpecs());