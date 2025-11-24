const username = "Alex";
const course = "JavaScript Fundamentals";

console.log(`Hello ${username}, welcome to the ${course}!`);

const name = "Sam";
const age = 21;

const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

student.greet();
console.log(student);

const getFullName = (first, last) => `${first} ${last}`;

const fullName = getFullName("Jane", "Doe");
console.log(fullName);