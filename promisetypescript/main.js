// // setTimeout(()=>{
// //     console.log("Helllo world")
// // },  3000)
// // function callback(name: string, callbacks:()=>{
// //     console.log("Hello  world")
// //     callbacks()
// // }, 20000)
// // function finalcalls()=>{(),} 
// // ;o                                                                                                                                                                                                       bn nbnm,k/kjjl
// Let sirZiapromise= new Promise(()=>)
var hellopromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(" Hello World");
    }, 10000);
});
hellopromise.then(function (message) {
    return console.log(message);
});
