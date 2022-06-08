function string1(dollers)
{

   let len=dollers.length;
    let str=JSON.stringify(dollers);
       while(len){
     str=str.replace('$', '');
     len--;}
     console.log(str);
    }

module.exports=string1;
