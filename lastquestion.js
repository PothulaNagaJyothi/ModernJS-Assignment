// 1
const a = 5, b = 7;
console.log(`1a: ${a} + ${b} = ${a + b}`);

const multiLine = `Line 1
Line 2
Line 3`;
console.log("1b:", multiLine);

const firstName = "John", lastName = "Doe";
console.log(`1c: Full name is ${firstName} ${lastName}`);


// 2
const square = n => n * n;
console.log("2a:", square(4));

const objWrong = {
  value: 50,
  test: () => console.log("2b (wrong):", this.value)
};
objWrong.test();

const obj = {
  value: 50,
  test() {
    console.log("2c (correct):", this.value);
  }
};
obj.test();


// 3
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log("3a:", productCopy);

const aObj = { x: 1 };
const bObj = { y: 2 };
const mergedAB = { ...aObj, ...bObj };
console.log("3b:", mergedAB);

const maxValue = (...nums) => Math.max(...nums);
console.log("3c:", maxValue(3, 10, 2, 50, 7));


// 4
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log("4a:", a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("4b:", brand);

const info = {};
const someProp = info.user?.name;
console.log("4c:", someProp);


// 5
for (var i2 = 0; i2 < 3; i2++) {}
console.log("5a:", i2);

console.log("5b: ReferenceError (j is not defined)");


// 6
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log("6a:", speed);

const age = 20;
const personType = age >= 18 ? "Adult" : "Minor";
console.log("6b:", personType);

const num = -5;
const sign = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log("6c:", sign);


// 7
const nums = [1, 2, 3];
const numsExtended = [...nums, 4, 5];
console.log("7a:", numsExtended);

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log("7b:", combined);

const printNames = (...names) => names;
console.log("7c:", printNames("A", "B", "C"));


// 8
const user1 = { id: 101, status: "active" };
const { id: userId, status } = user1;
console.log("8a:", userId, status);

const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log("8b:", user2);

const itemId = 1;
const name = "Book";
const item = {
  itemId,
  name,
  print() {
    console.log(`8c: ${this.name} (#${this.itemId})`);
  }
};
item.print();


// 9
const today = new Date().toDateString();
console.log(`9a: Today is ${today}`);

const studentName = "Alex", score = 92;
console.log(`9b: Hello ${studentName}, your score is ${score}/100`);


// 10
const add = (x, y) => x + y;
console.log("10a:", add(3, 4));

const isAdult = ageVal => ageVal >= 18;
console.log("10b:", isAdult(17), isAdult(20));

const double = n => n * 2;
console.log("10c:", double(9));


// 11
const original = [1, 2, 3];
const clone = [...original];
console.log("11a:", clone);

const withHundred = [100, ...original];
console.log("11b:", withHundred);

const obj1 = { id: 1, status: "inactive" };
const obj2 = { status: "active", role: "user" };
const mergedObj = { ...obj1, ...obj2 };
console.log("11c:", mergedObj);


// 12
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log("12a:", user3.address?.city);

console.log("12b:", user3.job?.title);

const config = {};
console.log("12c:", config.server?.port);
