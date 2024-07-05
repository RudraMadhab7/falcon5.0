// function myfunction() {
//     console.log("hello rudra");

// }
// myfunction();
// myfunction();
// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("i lov js",100)

// function sum(x,y){
//     console.log(x+y);
//     return ;
// }
// sum(2,3)

// function sum(x,y){
//     s=x+y;
//     return s;
// }
//  let val=sum(2,3)
//  console.log(val);

//multiple function
// function sum(a,b){
//     return a+b;
// }
//multiolication function
// function mul(a,b){
//     return a*b;
// }

//arrow function
// const Aroowsum=(a,b)=>{
//     console.log(a+b);
// }

//  let arrowmul=(a,b)=>
//      {
//         return a*b;
//         }

// const printHello=()=>{
//     console.log("hello");
// }
//or
//const printHello=()=>console.log("hello");

//count vobal
function countvowels(str){
    
      let count=0;
    for (const char of str) {

       if(char ==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;

       }
       console.log(count);
        
    }
    return count;
}
//arrow function
// const countvow=(str)=>{
    
//     let count=0;
//     for (const char of str) {

//        if(char ==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//         count++;

//        }
    //    console.log(count);
        
//     }
//     return count;
// }


//for each loop inarray

// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
// console.log(val);
// });

//using arrow function
1//  let arr=[1,2,3,4,5];
//  arr.forEach((val)=>{ //val= value at each index
//    console.log(val);
//  });

2
// let arr=[1,2,3,4,5];
// arr.forEach((val,idx,arr)=>
// {
//    console.log(val,idx,arr)
// })

3
//  let nums=[1,2,3,4,5];
//  let calcSquare=(num)=>{
//    console.log(num*num);
//  };
//  nums.forEach(calcSquare);

//filter method
//filter method only save tru value
//  let arr=[1,2,3,4]
//  let evenarr=arr.filter((val)=>{
//     return val%2==0;
//  });
//  console.log(evenarr)


//reduse method
//res=previous=1 & curr=after=2

// let arr=[1,2,3,4]
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output)