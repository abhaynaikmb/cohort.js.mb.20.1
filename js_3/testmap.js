
const maps= require('./map.js');
const items = [1, 2, 3, 4, 5, 5];
cb=(i)=>{return i*2;}
console.log(maps(items,cb));