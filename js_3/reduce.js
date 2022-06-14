


 function reduces(elements,cb) {
   
   let se =  0;
   const first = elements[se];
   let reduced = first;
   for ( let i = se+1; i < elements.length; ++i ) {
     reduced = cb(reduced, elements[i] )
   }
   return reduced;
 }





 module.exports=reduces;