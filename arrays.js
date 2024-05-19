let fruits = ['Mango', 'Banana', 'Orange'];

let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

console.log('fruit',fruits[1]);

fruits[2] = 'Kiwi';
console.log({fruits});

console.log('last item', fruits[fruits.length - 1]);
let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});

let addEnd = fruits.push('Pawpaw');
console.log({fruits});

let addStart = fruits.unshift('Pineapple');
console.log({fruits});

let removeEnd = fruits.pop();
console.log({fruits});

let removeStart = fruits.shift();
console.log({fruits});

let items = [20, 30, 40, 50, 60];
let add = items.reduce((acc, curr)=> acc + curr);
console.log({add});

let multiply = items.map(item => item *2);
console.log({multiply});

let square = [];
items.forEach(item => {
    const multiply = item * item;
    console.log({multiply});
    square.push(multiply)
});
console.log({square});

// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let array1 = [3, 7, 34, 90, 12];
let array2 = [true, "green", "where", 12, 56];

console.log('last item', array1[array1.length - 1]);
console.log('last item', array2[array1.length - 1]);

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let words = ["Cow", "Bird", "Snake", "Dog"];
let words2 = words.toString();
console.log({words2});

 
// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 =  [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr4 = arr3.sort();
console.log({arr4});

// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",            "school", "girl", "woman"];


// // Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let arrNums = [2, 4, 6, 5,3, 9];
let newNums = [];
arrNums.forEach(arrNums => {
    const multiply = arrNums * 2;
    console.log({multiply});
});
