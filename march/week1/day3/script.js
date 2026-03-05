console.log("welcome to coding");


let arr = [1, 2, "hii", true, undefined, { name: "xyz" }];
console.log(arr[5].name);

// by using new keyword we can create array
let arr1=new Array(3);
// arr1[0]=2
// arr1[1]=5
// arr1[2]=8

// arr1.fill(9)

console.log(arr1)

for(let v of arr){
    console.log(v)
}

let numArr=[85, 97, 44, 37, 76, 60];

let sum=0;
for(let v of numArr){
    sum+=v;
}

console.log(sum/numArr.length);

// push and pop
numArr.push(90,87,"bye");
console.log(numArr)

numArr.pop()
numArr.pop()
console.log(numArr)

// shift and unshift
numArr.shift();
console.log(numArr)

numArr.unshift(2,3,4);
console.log(numArr);

console.log(numArr.toString());

// console.log(+"2");// 2(number) or (string)

console.log([1,2,3].concat([4,5,6]));


console.log(numArr.slice(0,5));
console.log(numArr.slice(4,5));
console.log(numArr)
numArr.splice(3,2,85)
console.log(numArr);

let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2,1,"Ola");
// companies.push("Amazon")
console.log(companies)

//print all elements of an array
let b=[1,2,3];
for(let value of b){
    console.log(value);
} 
//1
let v=["bloombergh","microsoft","uber","google","ibm","netflix"];
v.shift();
console.log(v)
//3
let c=["bloombergh","microsoft","uber","google","ibm","netflix"];
c.push("amazon");
console.log(c)
//2
let d=["bloombergh","microsoft","uber","google","ibm","netflix"];
d.splice(2,1,"ola");
console.log(d)



