function string2(ip)
{

   let len=ip.length;
    if(len==15){
       while(len){
     ip=ip.replace('.', ' ');
     len--;}
     const arr=ip.split(" ");
    if( !arr.some(isNaN))
      {
     console.log(arr);
       }
    }
    }

module.exports=string2;