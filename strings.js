let a = 'Hello';
let b = "World";
let c = `There`;

let length = a.length;
console.log({length});
// index
console.log('item', a[2]);
// indexOf
console.log('index', a.indexOf('e'));

// concatenation1
let greet = a + ' ' + b;
console.log({greet});

// concatenation2
let salamu = `${a}  ${b} I love code`;
console.log({salamu});

// const food = "The quick fox jumped over the lazy dog";
// let x = "eat";
// let newstring = `The quick ${x} fox jumped over the lazy dog`;
// console.log({newstring});

const food = "The quick fox jumped over the lazy dog";
let s = food[4]
console.log(s)
console.log(food.replace("q","eat"))

console.log(food.search("jump"))