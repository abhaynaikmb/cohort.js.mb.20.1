
const maps= require('./map.js');
const items = [1, 2, 3, 4, 5, 5];
cb = ( i,arr ) => arr.push(i);
console.log(maps(items,cb));