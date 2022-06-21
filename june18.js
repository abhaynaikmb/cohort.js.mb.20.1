
const userDetailsArray = [
    {
        "id": "600dc3b5d617e547a0e74cb9",
        "name": "Mitchell Fitzgerald",
        "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
        
        address: {
            streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
            city: 'North Dakota'
        },
        "company": "Scenty"
    },
    {
        "id": "600dc3b5c4e60ba2ebf06569",
        "name": "Howell Faulkner",
        "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
        address: {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
        },
        "company": "Fleetmix"
    }
]

// Q.1 Get all addresses from userDetailsArray using both Map & Reduce and return the result in an array.

// Response : 
// [{
//             streetAddress: '48 Flatlands Avenue',
//             neighbour: 'Cutter',
//             city: 'North Dakota'
//         }, {
//             streetAddress: '77 Hemlock Street',
//             neighbour: 'Hasty',
//             city: 'Florida'
// }]
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
let adressArr=userDetailsArray.reduce((adressArray,x) => {
   adressArray.push(x.address);
 return adressArray;
 },[])
console.log(adressArr)
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////




// Q.2 Get all addresses from userDetailsArray using reduce Function and return the result in the following format

// Response : 
// {
//     600dc3b5d617e547a0e74cb9: {
//         streetAddress: '48 Flatlands Avenue',
//             neighbour: 'Cutter',
//                 city: 'North Dakota'
//     },
//     600dc3b5c4e60ba2ebf06569: {
//         streetAddress: '77 Hemlock Street',
//             neighbour: 'Hasty',
//                 city: 'Florida'
//     }

// }


//////////////////////////////////////////////////////


 let idAdress =userDetailsArray.reduce((idAdressArray,x) => {
   idAdressArray[x.id]= x.address;
  return idAdressArray;
},{})
console.log(idAdress)


////////////////////////////////////////////////////////



//Q.3 Get all user details in the following object format using reduce.

// Response:
// {
//         600dc3b5d617e547a0e74cb9": {
//             "name": "Mitchell Fitzgerald",
//             "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
//             "address": "48 Flatlands Avenue, Cutter, North Dakota",
//             address: {
//                 streetAddress: '48 Flatlands Avenue',
//                 neighbour: 'Cutter',
//                 city: 'North Dakota'
//             },
//             "company": "Scenty"
//         },
//         600dc3b5c4e60ba2ebf06569: {
//         "name": "Howell Faulkner",
//         "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
//         address: {
//             streetAddress: '77 Hemlock Street',
//             neighbour: 'Hasty',
//             city: 'Florida'
//         },
//         "company": "Fleetmix"
//     }
// }


//////////////////////////////////////////////////////


let idNameABoutAdress=userDetailsArray.reduce((idNAA,x) => {
 idNAA[x.id]={ "about" : x.about, "name" : x.name, "adress" :x.address,"company":x.company};
return idNAA
},{})
console.log(idNameABoutAdress)


////////////////////////////////////////////////////////


// Q4. Filter out the person who lives in city "North Dakota" using reduce and generate the following result

// Response:
// {
//       600dc3b5d617e547a0e74cb9": {
//             information: ["Mitchell Fitzgerald", "North Dakota", "Scenty"]
//       }
// }


//////////////////////////////////////////////////////


let filterND=userDetailsArray.reduce((nortDakota,x) => {
   if(x.address.city=='North Dakota') 
     { 
         nortDakota={ [x.id] : { "information":[x.name , x.address.city , x.company] }};
     }
return nortDakota;
},{})
console.log(filterND);


////////////////////////////////////////////////////////



 // Q5. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
// Response: 
// [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, "North Dakota", "Scenty"]


//////////////////////////////////////////////////////


let nD=userDetailsArray.reduce((nDF,x) => {
  if(x.address.city=='North Dakota'){ 
 nDF=[{  "id": x.id, "name" : x.name }, x.address.city , x.company];
}

 return nDF;
 },[])
 console.log(nD);


////////////////////////////////////////////////////////




 // Q6. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
// Response: 
// [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }]


//////////////////////////////////////////////////////


let nd6=userDetailsArray.reduce((nDS,x) => {
    if(x.address.city=='North Dakota'){ 
   nDS = [{  "id": x.id, "name" : x.name }, {"city" : x.address.city} , {"company" : x.company}];}
return nDS;
 
 },[])
 console.log(nd6)


////////////////////////////////////////////////////////


 // Q7. Transform into following Object
// Response:
// [
//     [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }],
//     [{id: 600dc3b5c4e60ba2ebf06569, name: Howell Faulkner"}, { city: "Florida" }, { company: "Fleetmix" }]
// ]


//////////////////////////////////////////////////////


let transF=userDetailsArray.reduce((transForm,x) => {
    transForm=[{  "id": x.id, "name" : x.name }, {"city" : x.address.city} , {"company" : x.company}];

 return transForm;
 },0)
 console.log(transF)

 //////////////////////////////////////////////////////