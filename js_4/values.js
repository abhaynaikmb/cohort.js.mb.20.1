function val(obj) {

    const value = [];
    for ( let v in obj ) {
      if(typeof obj[v] === "function")
       { null }
      else {
        value.push(obj[v]);

       }
    }
    return value;
  }
  module.exports=val;