const car = {
    engine: true,
    steering: true,
    speed: 'slow'
}

const sportCar = Object.create(car);
sportCar.speed = 'fast'

// This will log an empty object because sportCar itself has no properties
console.log(sportCar);

// To see the inherited properties, you can do the following
console.log(sportCar.engine); // true
console.log(sportCar.steering); // true
console.log(sportCar.speed); // 'slow'

// Or use a for...in loop to log all properties, including inherited ones
for (let prop in sportCar) {
    if (sportCar.hasOwnProperty(prop)) {
        console.log(`Own property: ${prop} = ${sportCar[prop]}`);
    } else {
        console.log(`Inherited property: ${prop} = ${sportCar[prop]}`);
    }
}
