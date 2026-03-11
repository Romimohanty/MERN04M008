//3.Group Numbers (Even and Odd)
let arr=[1,2,3,4,5,6];
 let even = [];
 let odd = []

for(let num of arr){
  if(num % 2 === 0){
    even.push(num);
  }else{
    odd.push(num);
  }
 
}
console.log({even, odd});

//4.From an array of numbers, return only numbers greater than 50 using function
function greater(arr1){
    return arr1.filter(num=>num>50)
}
console.log(greater([20,55,60,30,10]));

//5.Calculate the total price of products in a array using function.
function totalPrice(arr){
    let sum=0;
    for(let num of arr){
        sum+=num;
    }
    return sum;
}
console.log(totalPrice([100,400,300]));
//6.Replace all spaces in a sentence with hyphens (-) in a string.
let str = "romi mohanty";
let result = str.replaceAll(" ", "-");
console.log(result);
//7.what are the types of function ?
//  =>anonymous function
//  =>Named function
//  =>expressional function
//  =>nexted function
//  =>IIF function
//  =>Arrow function
//  =>Higher order function
//  =>callback function

//8.what is function currying ?
//Calling a child function along with parent by using one more parenthesis is known as function  currying

//9.what is the benefits of a function ?
//Code Reuse
//Less Code
//Easy to Understand

//10.what is the Higher order Function explain any add some example ?
//it is accepting a  function as a parameter and it is return a function
