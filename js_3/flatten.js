let arr=[];
function flattens(elements) {
   
 for ( let items of elements ){
if (!Array.isArray(items)) 
     arr.push(items);

     else
     {
      flattens(items)
      
     }
  
    }
  return(arr);
}





module.exports=flattens;