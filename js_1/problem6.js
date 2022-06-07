const inventory = require('./carsarr.js') 
function problem6(inventory){let BMWAndAudi =[];

for (let i = 0; i < inventory.length; i++) {

     if (inventory[i]["car_make"] == "Audi" || inventory[i]["car_make"] == "BMW") {
         BMWAndAudi.push(inventory[i]);
     }
 }
 console.log(BMWAndAudi);
 console.log(JSON.stringify(BMWAndAudi));
 }
 module.exports=problem6;
