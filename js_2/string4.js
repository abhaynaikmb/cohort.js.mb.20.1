function string4(obj){


  
     let  str=obj["first_name"]+" "+obj["middle_name"]+" "+obj["last_name"];
     str = str.toLowerCase().split(' ');
     for (let i = 0; i < str.length; i++) {
       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     }
     return str.join(' ');
}

module.exports=string4;