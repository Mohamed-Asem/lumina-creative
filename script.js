'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const max = Math.max(...arr);

const arr2 = arr.filter(el => el !== max);

const second = Math.max(...arr2);
console.log(max);
console.log(second);
