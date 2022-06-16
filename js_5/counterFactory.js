function cf(i) 
{
    let c=0;
   function increment() 
   {
     return ++c;;
   }
   function decrement() 
   {
     return --c;
   }
   return {
     increment,
     decrement
   }
}
module.exports=cf;