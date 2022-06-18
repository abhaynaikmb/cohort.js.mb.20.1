function inverted(o) {
    let obj={};
    let key =[];
    let value=[];
     for(let i in o)  key.push(i);
  for(let j in o) value.push(o[j]);



    const invert = [];
    for ( let i = 0; i < key.length; i++) {
      invert[i] = [value[i],key[i]];
    
    };
      obj={ ...invert}
    return obj;
  }
  module.exports=inverted;