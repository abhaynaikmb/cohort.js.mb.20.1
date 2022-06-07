const inventory = require('./carsarr.js') 
function problem5(inventory){let oldCars =[];
 console.log(); 

 for (let i = 0; i < inventory.length; i++) {

     if (inventory[i]["car_year"] < 2000) {

         oldCars.push(inventory[i]);
     }
 }
 console.log(oldCars)
 console.log("car count ===== " +oldCars.length);}
 module.exports=problem5;