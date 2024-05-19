function add (num1, num2){
    const sum = num1 + num2;

    console.log({console: sum});
    return {return: sum};
}

console.log(add(2,3));
add(4,5);

const sum = 7;
console.log({sum});

// Function expressions

const subtract = function (num1, num2){
    console.log(num1 - num2);

};
subtract(20, 10)

// Arrow functions
const multiply = (num1, num2) => console.log(num1 * num2);
multiply(5,6);
multiply(9,7);

// IIFEs (Immediately Invoked Function Expressions)
(function(a){
    console.log('Hello', a);
})(20);

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
    function times (nums){
        let nums = [2, 4, 3, 5, 8, 9];
        // let newNums = [];
        newNumsums.forEach(element => {
            let times = nums * 2;
            console.log({times});
            
        });


    }


