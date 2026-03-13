console.log("welcome");


//higherorder  function
//it is accepting a  function as a parameter
function hof(func){
  func()
}
hof(function(){console.log("this is the argument function")});
//it is return a function
function hof1(){
    let childFun=function(){
        console.log("this is the inside function")
    }
    return childFun;
}
hof1()() 


//immidiate invoking function
// (function () {
//     console.log("this is iif fun")
// })()

//callback function
//callback function it is a function used as an argument at the time of calling
//it is the part of higher order function

//arrow function
let arrowFun= () =>{
    console.log("this is arrow fun")
}
arrowFun();


let arr=["item 8","item 2","item 5","item 4","item 1"]
let sort=()=>{
    return arr.toSorted();
}
console.log(sort());
console.log(arr);


let arr1= [1,2,3,4,5]
arr1.forEach((v,i)=>{
console.log(v,i)

})

//for a given array of numbers ,print the square of each value using the forEach loop
 let arr3=[2,3,4,5];
 arr3.forEach((v,i)=>{
console.log(v*v);

 })

 //
