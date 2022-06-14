const map= require('./mapObject.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham'};
cb = v => "is "+v;
 console.log(map(testObject, cb));