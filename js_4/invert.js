function inverted(o) {
    let obj={};
    const k = Object.keys(o);
    const v= Object.values(o);
    const invert = [];
    for ( let i = 0; i < k.length; i++) {
      invert[i] = [v[i],k[i]];
    
    };
      obj={ ...invert}
    return obj;
  }
  module.exports=inverted;