//1. Add a click event to a div and log the event type using event object.
let a=document.querySelector(".divv");
console.log(a);

a.addEventListener("click",(event)=>{
     console.log(event.type);

});

//2.Write a program to display the tag name of the clicked element using event.target.
let b=document.querySelector(".divv");
console.log(b);

b.addEventListener("click",(event)=>{
     console.log(event.target);

});
//3. Track mouse movement and print X and Y coordinates.
let c=document.querySelector(".divv");
console.log(c);
c.addEventListener("mousemove", (e) => {
console.log(e.clientX,e.clientY);
});
