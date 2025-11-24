const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];

const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

const user = { 
    name: "Alice", 
    age: 22, 
    address: { 
        city: "Bangalore", 
        pin: 560001
    } 
};

const { 
    name, 
    address: { 
        city, 
        pin 
    } 
} = user;

console.log(mergedArray);

console.log(`Sum of 1, 2, 3, 4, 5: ${sum(1, 2, 3, 4, 5)}`);

console.log(`Name: ${name}`);
console.log(`City: ${city}`);
console.log(`Pin: ${pin}`);