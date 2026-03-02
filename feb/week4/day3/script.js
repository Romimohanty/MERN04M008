console.log("welcome")

//way of declaration---->

//var
var v;//only declaration
v=30;// only initialisation
var a=50;// both declaration and initialisation
console.log(a)
var a="hello"// re-declaration
a="bye"
console.log(a)

//Let
let b;
console.log(b)
v=30;
// let b=20;// re-declaration not allowed
v=20;
console.log(v)//re-assignment allowed

//const
// const v;
// v=20; // only declaration or initialisation is not allowed
const x=20;
//re-declaration or re-assignment we can't use in const

//data types
//primitive
//number
let num=7;
console.log( typeof num)
//string
let str="hii"
console.log( typeof str)
//boolean
let bool=false;
console.log(bool)
//undefined
let und=undefined;
console.log(und)
//null
let nullvalue=null;
console.log ( typeof nullvalue)

// BigInt
let bigValue=BigInt(879874982098349839738974983789);
console.log(bigValue)

// symbol

let symValue=Symbol("%");
console.log(symValue);

// non primitive data type
// Object

let obj={
    name:"xyz",
    age:60,
    isPassed:true,

    childObj:{
        childName:"xyz child",

        nextChildObj:{
            nextName:"hii"
        }
    }
}

console.log(obj["age"]);

console.log(obj.childObj.childName)
console.log(obj.childObj.nextChildObj.nextName)


// Array
let arr=[1,2,4,"hello",false,{name:"xy"},[5,6]];
console.log(arr[5].name);








