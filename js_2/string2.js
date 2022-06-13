function string2(ip)
{

   let len=ip.length;
  
       while(len){
     ip=ip.replace('.', ' ');
     len--;}

     const arr=ip.split(" ");
     for (let i=0;i<4;i++) {  
     if(!(arr[i]<255&&arr[i]>0))
     {console.log("wrong format");  return;}
     }
  
    if( !arr.some(isNaN))
      {
        
          console.log(arr);
        }
        else
        {
          console.log("wrong format");  return;
        }
      
  
      
     
       }
    
  


module.exports=string2;