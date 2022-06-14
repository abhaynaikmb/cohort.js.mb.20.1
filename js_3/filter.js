function filters(elements) {
   
    let found = [];
    for ( let i = 0; i < elements.length; ++i) {
      if ( cb(elements[i]) )
       {  found.push(elements[i]); }
    }
    return found;

  }

  cb = ( e ) => e===5? true : false;

  module.exports=filters;