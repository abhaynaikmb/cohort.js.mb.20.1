function finds(elements) {
   
    let found = undefined;
    for ( let i = 0; i < elements.length; ++i) {
      if ( cb(elements[i]) )
       { return found = elements[i] }
    }
    return found;

  }

  cb = ( e ) => e===1? true : false;

  module.exports=finds;