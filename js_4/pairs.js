function pairs(obj) {
    let p=[];
    for(i in obj) p.push([i,obj[i]]);
    return p;
}
module.exports=pairs;