const inventory = require('./carsarr.js') 
function problem2(inventory,id){ let lastCar = 0;
 lastCar = inventory.length - 1;
 console.log('Last car is a '+inventory[lastCar]["car_make"] + " " + inventory[lastCar]["car_model"]);}
 module.exports=problem2;