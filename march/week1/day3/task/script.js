//1.Create an array [10, 20, 30]. Add 40 at the end of the array.
let arr=[10,20,30];
arr.push(40);
console.log(arr);
 
//2.Given the array ["red", "blue", "green"], remove the first element.
let arr1=["red", "blue", "green"];
arr1.shift();
console.log(arr1);

//3.Combine the arrays [1, 2, 3] and [4, 5, 6] into a single array.
let arr2=[1, 2, 3];
let arr3=[4, 5, 6];
console.log(arr2.concat(arr3));

//4.From the array [10, 20, 30, 40, 50], create a new array containing the first three elements.
let arr4=[10, 20, 30, 40, 50];
let arr5=arr4.slice(0,3);
console.log(arr5);

//5.From ["HTML", "CSS", "JS", "React"], remove "JS".
let arr6=["HTML", "CSS", "JS", "React"];
arr6.splice(2,1);
console.log(arr6);

//6.In ["apple", "banana", "mango"], replace "banana" with "grape".
let arr7=["apple", "banana", "mango"];
arr7.splice(1,1,"grape");
console.log(arr7);

//7.Convert the array ["Hello", "World", "JS"] into a string.
let arr8=["Hello", "World", "JS"];
arr8.toString();
console.log(arr8);

//8.Create an array with 5 elements where all elements are 0.
let arr9=new Array(5);
arr9.fill(0);
console.log(arr9);

//9.From [1, 2, 3, 4, 5], create a new array containing the last two elements.
let arr10=[1, 2, 3, 4, 5];
let arr11=(arr10.slice(3,5));
console.log(arr11);

//10.Extract elements from index 1 to 3 from [10, 20, 30, 40, 50].
let arr12=[10, 20, 30, 40, 50];
let result=arr12.slice(1,4);
console.log(result);










