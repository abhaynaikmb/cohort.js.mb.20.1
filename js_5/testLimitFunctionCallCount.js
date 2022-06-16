const lfc= require('./limitFunctionCallCount.js');

function cb () { console.log("Callback invoked") };
let n= lfc(cb,4);

n.invoke();
n.invoke();n.invoke();n.invoke();n.invoke();n.invoke();
