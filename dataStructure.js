// data structure in arrays
const fruits = ['apple', 'mango', 'banana'];
console.log(fruits);

//Access element in array
console.log(fruits[0]);

//Add element 
fruits.push('cheery');
console.log(fruits);

//Remove elements
fruits.pop();
console.log(fruits);

// Remove the element at index 1
fruits.splice(1,1);
console.log(fruits);

// Add 'orange' at index 1
fruits.splice(1,0, 'orange');
console.log(fruits);

fruits.splice(1,0, 'mango');
console.log(fruits);

console.log(fruits[1]);