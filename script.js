'use strict'

const array = [1, 4, 3, 5, 10, 15, 96, 132, 160];

const newArray2 = array.reduce(function(number, item) {
    if (item % 2 === 0) {
        number.push(item);
    }
    return number;
}, []);

console.log(newArray2)