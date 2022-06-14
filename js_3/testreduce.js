const reduces= require('./reduce.js');
const items = [1, 2, 3, 4, 5, 5];
cb = ( reduced, value ) => reduced += value;
console.log(reduces(items));