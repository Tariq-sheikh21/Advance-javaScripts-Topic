// Template Litrals in Js
const name = 'Ali';
const age = 30; 

const message =  `Hello, my name is ${name} and I am ${age} years old.`; 
console.log(message);


const multiline = `This is a string 
that spans across
multiple lines.`;

console.log(multiline);

// sum of two numbers
const a = 10;
const b = 20;

const result = `the sum of ${a} and ${b} is ${a + b}`;
console.log(result);

//Nested Template Literals
const user = {
    name: "Ali",
    age: 30,
    address: {
      city: "Lahore",
      country: "Pakistan"
    }
  };
  
  const userInfo = `User Info:
  Name: ${user.name}
  Age: ${user.age}
  Location: ${`${user.address.city}, ${user.address.country}`}`;
  
  console.log(userInfo);