//1.Write a function to print a greeting message.
function greeting(){
    console.log("Welcome");
}
greeting();

//2.Write a function that takes a name as a parameter and prints ?
function para(str){
    console.log(`hello ${str}`);
}
para("romi mohanty");
//3.Write a function that takes two numbers and returns their sum.
function fun1(a,b){
    return a+b;
}
console.log(fun1(2,3));
//4.Write a function that returns the square of a number.
function fun2(number){
    return number*number;
}
console.log(fun2(3));
//5.Write a function to find the largest of two numbers.
function fun3(a,b){
    if(a>b){
        console.log("the largest num is a")
    }else{
         console.log("the largest num is b")
    }
}
fun3(3,5);
//6.Write a function that returns the factorial of a number.
 function fun4(num) {
    let result=1;
    for(let i=1;i<=num;i++){
        result=result*i;
    }
    return result;
 }
 console.log(fun4(5));
 //7.Write a function that returns the reverse of a string.
 function fun5(str){
   let rev = str.split("").reverse().join("");
   return rev;
 }
  console.log(fun5("romi mohanty"));
  //8.Write a function that checks if a string is a palindrome.
function fun6(str){
    let rev = str.split("").reverse().join("");
    if(rev===str){
        console.log("the number is palindrome");
    }else{
    console.log("the number is not palindrome");
    }

}
fun6("nan");
