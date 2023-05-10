// var a=100;
// var b=200;
// const add=()=> a+b;
// console.log(add());


/* task 1 Arrow Function - Using inner function
 Create a function named person and declare inner function and inner console using
 this keyword and accessed by using arrow function. */

    // example 1

// function Person(fname,age){
//     this.name=fname;
//     this.age=age; 
//     this.showName=()=>{
//         console.log(this.name);
//     }
//     this.showAge=()=>{
//         console.log(this.age);
//     }
// }
// var Person1=new Person("Ramkumar",22);
// Person1.showName();
// Person1.showAge();


    //  example 2

// function person(name,age){
//     this.name=name;
//     this.age=age;
//     this.good=function(){
//         console.log(this.name);
//     }
//     this.last=function(){
//         console.log(this.age);
//     }
//    }
//    var sayname=new person("ramkumar",22);
//        sayname.good();
//        sayname.last();

 

/* task 2 Arrow Function with Single Argument
Define an arrow function multiplebytwo which accepts a number and returns that number multiple by 2.
Sample Input : 10
Sample Output : 20 */


/* <script>
// var a=10;
// var b=2;
 const multiplebytwo = (a,b)=>a*b 
  console.log(multiplebytwo(10,2));
</script> */





/* task 3 Define an arrow function addition,Substraction,Multiplication,Division which
 accepts a number and returns number as action value.
Sample input : add(10,5);
Sample output : 15 */

//    //   Addition
//    const addition =(a,b)=>a+b;
//    console.log(addition(10,5));
//    //   Substraction
//    const Substraction=(a,b)=>a-b;
//    console.log(Substraction(10,5));
//    //   Multiplication
//    const Multiplication = (a,b)=>a*b;
//    console.log(Multiplication(10,2));
//    //   Division
//   const Division = (a,b)=>a/b;
//   console.log(Division(10,5));



/* task 4 Calculate the length of string using arrow function
Transform this function that tells you how long a string is :
Sample input: let a = 'abcd''
Sample output : The given string is "abcd" and length of string is 4 */

    //   contact string in arrow function

// const string=()=>{
//     var a="abcd";
//     var b=a.length;
//     console.log(" The givien string is "+ a +" and length of string is "+b)
//  }  
//  console.log(string()) ;  