function string5(arr){


  
    let  str=arr.toString();
      len=str.length;
    
    while(len){
        str=str.replace(',', ' ');
        len--;}
        return str;
}


module.exports=string5;