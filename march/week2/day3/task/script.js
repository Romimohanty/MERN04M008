//1.Print each number multiplied by 2.
let arr=[1,2,3,4,5];
let updateArr=arr.map(v=>v*2);
console.log(updateArr);


//2.Print all words in uppercase from an array of strings.
let array=["romi","mamta","coco"];
let updateArray=array.map(word=>word.toUpperCase());
console.log(updateArray);



//3.Create a new array with the square of each number.
let arr2=[2,3,4];
let newarray=arr2.map(v=>v*2);
console.log(newarray);
console.log(arr2);


//4.Convert an array of numbers into strings.
let arr3=[1,2,3,4,5];
let arr4=arr3.map(v=>v.toString());
console.log(arr4);


//5.Create a new array that contains the length of each word.
let arr5=["java","python","html"];
let arr6=arr5.map(word=>word.length);
console.log(arr6);

//6.Get all positive numbers from an array.
let arr7=[1,-7,5,-3,8,2,4];
let arr8=arr7.filter(num => num > 0);
console.log(arr8);

//7.Get all even numbers from an array
let arr9=[1,-7,5,-3,8,2,4];
let arr10=arr9.filter(num =>num%2==0);
console.log(arr10);

//8.Concatenate all strings in an array into one string.
let array1=["html","css","js"];
let array2=array1.reduce((acc, word) => acc + word);
console.log(array2);

//9.Find the minimum number in an array.
let array3=[23,54,78,12];
let array4=array3.reduce((acc,num)=>acc < num ? acc : num);
console.log(array4);


//10.Check if all words have more than 3 characters.
let array5 = ["html","css","java","node"];
let result = array5.every(word => word.length > 3);
console.log(result);

//11.Check if any word starts with the letter "a".
let array6 = ["apple","banana","mango","grape"];
let result2 = array6.some(word => word.startsWith("a"));
console.log(result2);




