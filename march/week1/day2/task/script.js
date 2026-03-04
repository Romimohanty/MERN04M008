//1
let str = "I love JavaScript";
console.log(str.split(" ").reverse().join(" "));


2//
let name = "romi";
let count = 0;

for (let char of name) {
  count++;
}

console.log("Length is:", count);

3//
let vari = "Hello";

for (let i = 0; i < vari.length; i++) {
  console.log(vari[i]);
}

//4
let b = "qlith";
let count1 = 0;

for (let char of b.toLowerCase()) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    count++;
  }
}

console.log("Vowels in the string is:", count);
//5
let m = "Hello World JS";
let spaceCount = 0;

for (let char of m) {
  if (char === " ") {
    spaceCount++;
  }
}

console.log("Spaces:", spaceCount);

//6
let name1 = "hello kitty";
console.log( name1.toUpperCase());
//7
let name2 = "hello kitty";
console.log( name2.toLowerCase());
//8
let name3 = "coco meow";
console.log(str.slice(0, 5));
//9
let kit = "meow world ";
console.log(kit.replaceAll(" ", ""));
//10
let r= "Hello";
console.log(r.split(""));
