//1.Write JavaScript code to select a paragraph using getElementById() and change its text.
let p=document.getElementById("para");
console.log(p);
 let v=p.innerText="this is paragraph"
console.log(v);

//2.Use getElementsByTagName() to count how many <p> tags exist on the page.
let c=document.getElementsByTagName("p");
let count=c.length;
console.log("total p tag:",count);


//3.Write JavaScript code to count how many child elements exist inside a div using children.
let x=document.querySelector("#dabaa");
let count1=x.children.length;
console.log("total child:",count1);

//4.Create a div with spaces and elements and log childNodes and children in console.
let div = document.getElementById("box");
console.log(div.childNodes);   
console.log(div.children);     

