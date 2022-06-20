const Cities = {
    detroit: {
        populations: "18M",
        area: "72M Sq Acres"
    },
    los_angeles: {
        populations: "11M",
        area: "72M Sq Acres"
    },
    ontario: {
        populations: "28M",
        area: "108M Sq Acres"
    },
    san_diego: {
        populations: "23M",
        area: "67M Sq Acres"
    },
    san_francisco: {
        populations: "18M",
        area: "87M Sq Acres"
    },
}


// Q1. Contruct an array of { name, population and area }. And
//     sort them out in terms of area .
//     If area is same . Sort by population.
//     Format of the name: Los Angeles
// let arr=[];
let arr=[];
let sortedCities=[];

let name='';
for(let [key,value] of Object.entries(Cities))
{
 key.split('_').forEach((eachWord,i) => {
    if(i!=0){name+=' '}
   name+=(eachWord.charAt(0).toUpperCase()+eachWord.slice(1));
   
}
)

sortedCities.push({name: name,population: value.populations,area :value.area});
name='';

}

sortedCities= sortedCities.sort((cityA,cityB)=>{
    cityAreaA=cityA.area.split(' ')[0].split('M')[0];
    cityAreaB=cityB.area.split(' ')[0].split('M')[0];

 
   if(cityAreaA==cityAreaB)
  {
     return cityA.population.split('M')[0]-cityB.population.split('M')[0];
 }
  return cityAreaA-cityAreaB;
})
console.log(sortedCities)






















