function map(obj, cb) {

    const maps= {}
    for ( let e in obj ){
      maps[e] = cb(obj[e]);
    }
    return maps;
  }
  module.exports=map;
