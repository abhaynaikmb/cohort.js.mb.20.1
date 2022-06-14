

 cb = ( x ) => console.log(x%2);


 function each(elements, cb)
  {
     for ( let item of  elements ) 
     {
    cb( item );
      }
 }

module.exports=each;