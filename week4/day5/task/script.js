//1.Write a program to check whether a number is even or odd.
let a=20;
if(a%2==0){
    console.log("this num is even")

}else{
    console.log("this num is odd")
}


//2. Take a number and print:
// - "Positive"
// - "Negative"
// - "Zero"

let number=34;
 if(number>0){
    console.log("number is positive")

 }
 else if(number<0){
   console.log("number is negative")
 }
 else{
       console.log("number is Zero")
 }

 //3.Check if a person is eligible to vote (age ≥ 18).
  let x=18;
  if(x<18){
    console.log("eligible for vote")
  }
  else{
    console.log("not eligible fot vote")
  }
  //4.Find the largest between two numbers.
  let y=20;
  let z=30;
  if(y<z){
    console.log("z is bigger")
  }
  else if(y>z){
      console.log("y is bigger")
  }else{
    console.log("both number are equal")
  }
  //5.Check whether a number is divisible by 5 or not.
  let b=25;
  if(b%5==0){
    console.log("the num is divisible by 5")
  }else{
    console.log("the number is not divisible by 5")
  }
  
  //6.Given marks:
// - 90+ → A
// - 75–89 → B
// - 50–74 → C
// - Below 50 → Fail


let mark=80;

switch(true){
    case (mark>=90):
        console.log("grade a");
    break;

    case (mark>=75):
        console.log("grade b");
    break;

    case (mark>=50):  
    console.log("grade c");
    break;

    default:
         console.log("Fail");
       break;
}
