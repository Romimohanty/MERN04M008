//1. Create an array of 5 fruits.
// Print the **first** and **last** elements using indexing
 let arr=["orange","Mango","Banana","Kiwi","apple"];
  console.log("First element:",arr[0]);
   console.log("Last element:",arr[arr.length-1]);

 //2.Add "Mango" to the end of the array using push() and "Kiwi" to the start using unshift().
arr.push("mango")
console.log(arr);

arr.unshift("kiwi");
console.log(arr);
 
//3.Use indexOf() to find the position of "Banana" in an array.
let position = arr.indexOf("Banana");
console.log("Position of Banana:",position);
//4.Use includes() to check if "Orange" exists in the array.
let includee= arr.includes("orange");
console.log("orange is exists in the arr?",includee);
//5.Convert an array of numbers [1,2,3,4,5] into a string separated by “-” using join().

let arr1=[1,2,3,4,5];
 let arr2=arr1.join("-");
console.log(arr2);
//6.Given an array [1, 2, 3, 2, 1, 4, 5], remove duplicates.//doubt
//7.Given an array of strings, return the one with the longest length.//doubt
//8.Reverse a string using array methods (split(), reverse(), join()).
let str = "Romi mohanty";
let name = str.split("").reverse().join("");
console.log(name);

//9.Count how many even numbers exist in [2, 5, 8, 11, 14, 17, 20].
let arr5 = [2, 5, 8, 11, 14, 17, 20];
let count = 0;

for (let num of arr5) {
  if (num % 2 === 0) {
    count++;
  }
}
console.log(count);
//10.Create a new array that contains the length of each string from ["React", "Node", "MongoDB"].
//11.Convert [1,2,3,4,5] → [5,10,15,20,25]
let arr6 = [1,2,3,4,5];
let result = [];

for (let num of arr6) {
  result.push(num * 5);
}
console.log(result);
//12.Replace all negative numbers in [4, -2, 6, -9, 7] with 0.
let arr7 = [4, -2, 6, -9, 7];

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] < 0) {
    arr7[i] = 0;
  }
}
console.log(arr7);