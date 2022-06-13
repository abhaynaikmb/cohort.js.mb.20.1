function string1(dollers)
{
let s=0;
   let len=dollers.length;
    let str=JSON.stringify(dollers);
       while(len){
     str=str.replace('$', '');
    len--;}
let i=0;

     
     let g = str.split(',');
     for( i=0; i<(g.length);i++)
     {
        
      g[i]=g[i].replace('\"', '');
      if(g[i]>0)
      {
     console.log(Number(g[i]));
     }
     else{
        console.log(i+1+":entry  not valid  ")
     }
   }
       }
module.exports=string1;
