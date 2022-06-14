function maps(elements, cb) {
    let arr=[];
    for ( let items of elements ){
      arr.push(cb(items));
    }
    return arr;
  }
module.exports=maps;


