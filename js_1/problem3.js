const inventory = require('./carsarr.js') 
function problem3(inventory){let carModels = [];
 console.log();

 for (let i = 0; i < inventory.length; i++) {

     carModels[i] = inventory[i]["car_model"].toLocaleLowerCase();
 }
 carModels.sort();
 console.log(carModels);}
 module.exports=problem3;