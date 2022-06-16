function lfc(cb,n) {

    
  
     
      let c = n;
     
      function invoke () {
      
       c-- >  0 ? cb() : console.log("not anymore") ;
      }
    
   return{invoke};
    
  }
   
    module.exports=lfc;