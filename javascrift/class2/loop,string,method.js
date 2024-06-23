//let a=1;
//for loop
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
    
// }
//while loop
//  let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

//do while loop

// let i=1;
// do{
// console.log("rudra");
// i++;
// }while(i<=5);

//for of loop
//for of loop manly used for array
// let str="rudra";
// for (let i of str) {
//     console.log(i)
// }

// let str="rudra";
// let size=0;
// for (let i of str) {
//      console.log("i=",i);
//     size++;
    
// }
// console.log(size)

//for in loop
// let student={
//     name:"rudra",
//     age:20,
//     cgpa:8.43,
// }
// for (let i in student) { //for in loop mainly return key like name,age,cgpa.
//     console.log(i);
//     console.log("KEY=",i,'value=',student[i])
// }

// let n=0;
// for (let i = 0; i< 100; i++) {
//    if (i%2==0) { //if odd number if (i%2!==0)
//       console.log(i)
//    }
// }
//  

//String
// let str1="Rudra";
// let str2="madhab";

// console.log(str1.length);
// console.log(str1[0]);


//for each loop
// let obj={
//     name="rudra",
//     rolle=2102139,
//     sec="cse",
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key)
        
//     }
//  }

//String
// let str1="Rudra";
// let str2="madhab";

// console.log(str1.length);
// console.log(str1[0]);



   //template literals

   // let sentence='this is a template literal';
// console.log(typeof sentence);

// let obj={
//    item:"pen",
//    price:10,

// };
// console.log("the cost of",obj.item,"is",obj.price);
//or
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("rudra \n madhab");

// let str="rudra"
// console.log(str.length)

    //string methhod
//method is not chanange orginal string it creat new string

//toUpercase()
   // let str="rudra"
   // let newstring=str.toUpperCase();
   // console.log(str);
   // console.log(newstring);

   //lowercase()
   
   // let str="RUDRA"
   // let newstring=str.toLowerCase();
   // console.log(str);
   // console.log(newstring);

   //trim()
   //  let str="  rudra";
   //  console.log(str.trim());

   //slice()
   
   // let str="0123";
   // console.log(str.slice(1,6)); //slice provide in between starting andending value
   
//const()
// let str1="rudra";
// let str2=" madhab"
// let res=str1.concat(str2);
// console.log(res);
//or
// str3=str1+str2;
// console.log(str3);

//replace()

//  let str="hellololo";
//  console.log(str.replace("lo","m"));
// console.log(str.replaceAll("lo","m"));

//charAt()

let str="Ilovjs";
console.log(str.charAt(0));

let str1="Ilovjs";
str[0]="s" //not posible changing or adding value use replace method(replaace())
console.log(str);