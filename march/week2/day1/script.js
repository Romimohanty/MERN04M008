console.log("hello");
//function
//type of function

//1.anonymous 
//it is func which has no names
// function(){

// }

//2.named function
function fun1(a,str){  //a is local variable for the function we can't use outside of the function
    console.log(`hii this is ${str}`,a);
}
fun1(50,"romi")

 //create a function execute only even number.
function fun2(num){
    if(num%2==0){
        console.log("this num is even");
    }
    
}
fun2(20)
//3.expressional function //function as expression
let fun3 = function(){
    console.log("expressional fun");
}
fun3()
//4.nexted  function
function parent(){
    console.log("this is the parent fun");
    function child(){
        console.log("this is the child fun");
        function nextchild(){
         console.log("this is the next child fun");

        }
        nextchild()
    }
    child()
}
parent()


function fun5(){
    let a=90;
    return a;
}
    console.log(fun5());

