const isEven = (n) => n % 2 === 0;

console.log(`isEven(4): ${isEven(4)}`);
console.log(`isEven(7): ${isEven(7)}`);

const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

console.log(`Marks: ${marks}, Result: ${result}`);

const greet = (name) => {
    const finalName = name ? name : "Guest";
    console.log(`Hello, ${finalName}`);
};

greet("Alice");
greet();