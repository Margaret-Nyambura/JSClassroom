let a = 20;
let b = 30;

let add = a + b;
console.log({ add });

let subtract = a-b;
console.log({subtract});

let division = a /b;
console.log({division});

let multiplication = a * b;
console.log({multiplication});

let c = '20';

let looselyEqualTo = a == c;
console.log({ looselyEqualTo });

let strictlyEqualTo = a === c;
console.log({strictlyEqualTo});

let looselyNotEqualTo = a != c;
console.log({ looselyNotEqualTo });

let strictlyNotEqualTo = a !== c;
console.log({ strictlyNotEqualTo });

// compound
a +=5
console.log({a});

// decrement
a--;
console.log({a});

// increment
a++;
console.log({a});

// implicit coercion(method1)
let d = +c;
console.log({d});

console.log({c});

// implicit coercion)(method2)
let e = c * 1;
console.log({e});

// explicit coercion
let f = Number({c});
console.log({f});






