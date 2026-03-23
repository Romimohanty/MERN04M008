//1.Create a button. When the user clicks it, show an alert saying "Button Clicke
 let button=document.createElement("button");
 button.innerText="click"
 document.body.appendChild(button);

//  let button1=document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("button clicked")
})


//2.Create a paragraph. When you double-click, change its text color to red.
let p=document.createElement("p");
p.innerText="this is para";
document.body.appendChild(p);
 
// let v=document.querySelector("p");
p.addEventListener("dblclick",()=>{
    p.style.color="red"
})

//3.Create an input field. When the user types, log the value in the console using the input event.
let pvr=document.createElement("input");
document.body.appendChild(pvr);
 
// let f=document.querySelector("input");
pvr.addEventListener("input",()=>{
    console.log(pvr.value);
})

//4.Create a button. When the mouse enters the button, change its background color.
let but=document.createElement("button");
but.innerText="click me"
document.body.appendChild(but);


// let c=document.querySelector("but");
but.addEventListener("mouseenter",()=>{
    but.style.backgroundColor="red"
})

//5.Create a button. When the mouse leaves, reset the background color.
let butt=document.createElement("button");
butt.innerText="click me"
document.body.appendChild(butt);

// let x=document.querySelector("butt");
butt.addEventListener("mouseenter",()=>{
    butt.style.backgroundColor="green"
})

    // let z=document.querySelector("butt");
butt.addEventListener("mouseleave",()=>{
    butt.style.backgroundColor="white";
})


