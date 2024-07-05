// console.log("hello")
// window.alert("hello")
console.dir(window.document);
console.dir(document.body);
//document.body.style.background="green"//this code will be write in inspect,consol.
 document.body.childNodes[3].innerText="ab3cd";

 //accessing the element using id in html

 let heading=document.getElementById("header");//h1
console.dir(heading);

//accesing the element using class

let headinG=document.getElementsByClassName("header");
console.dir(headinG);
console.log(headinG);

//selecting element through tag
 let para=document.getElementsByTagName("p")
 console.log(para);