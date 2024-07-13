let btn1=document.querySelector("#btn");
//btn1.onclick=(evt)=>{
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX,evt.clientY)
    // console.log(evt);
    // console.log("btn1 was clicked");
    // let a=25;
    // a++;
    // console.log(a);

//}
btn1.addEventListener("click",(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log("print");
})
btn1.addEventListener("click",()=>{
    console.log("button was clicked 1");
})
btn1.addEventListener("click",()=>{
    console.log("button was clicked 2");
})
//if you remove event listner then write this type
const handler3=()=>{
    console.log("button was clicked 3");
}
btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3);
  

// let biv=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside div");
// }
// creat a toggle button that change the screen to dark-mode when clicked and light-mode when clicked again create 7 button with 7 color,in that that when i clicked a button change my whole background color in that way