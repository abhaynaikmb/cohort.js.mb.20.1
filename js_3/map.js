function maps(elements, cb) {
  let arr = [];
 
    for ( let items of elements ){
      cb(items,arr);
    }
   

    return arr;
  }
module.exports=maps;