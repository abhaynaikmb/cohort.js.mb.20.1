const inventory = require('./carsarr.js') 
function problem4(inventory){let carYears = [];
 console.log();

 for (let i = 0; i < inventory.length; i++) {

     carYears[i] = inventory[i]["car_year"];

 }
 console.log(carYears);}
 module.exports=problem4;