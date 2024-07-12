// For in loop 
const person = {
    name: 'Tariq',
    age: 27,
    email: 'tariq@gmail.com'
}

for(let key in person ){
    console.log(key + ':' + person[key]);
}