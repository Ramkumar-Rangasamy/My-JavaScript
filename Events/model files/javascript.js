/* Ex 1.  Create a variable and print "Hello JavaScript" in alert box.*/

//  var a="Hello JavaScript";
//  alert(a);


/* Ex 2.  Get an input from prompt box and display it in the alert box. */

//   var a=prompt("enter your name");
//   alert(a);



/* 1. Get an input from user using prompt box and validate using switch case*/

//  var a=parseInt( prompt("enter the number"));
//    switch (a){
//         case 1:
//           alert("monday") ;
//         break;
//         case 2:
//           alert("Tuesday") ;
//         break;
//         case 3:
//           alert("Wednesday") ;
//         break;
//         case 4:
//           alert("Thursday") ;
//         break;
//         case 5:
//           alert("Friday") ;
//         break;
//         case 6:
//           alert("Saturday") ;
//          break;
//         case 7:
//           alert("Sunday") ;
//         break;
//         default:
//           alert("invalid week days");   
//         }  




/*  2.    Get an input from the user and display it in pop-up when the user hit the display button. */

// <input type="text" id="result">
// <input type="button" onclick="output()" value="Submit">

// <script>
//   function output(){
//      var a=document.getElementById("result").value;
//       alert(a);
//   }
// </script>





/*  3.   Get two inputs from the user and compare whether it is equal or not. If it is equal then it should pop-up "Data's are equal" message. */    

// <form>
//   <input type="text" id="resultone">
//   <input type="text" id="resulttwo"> 
//   <input type="button" value="submit" onclick="output()">
// </form> 
    

// <script>

//   function output(){
//   var a=document.getElementById("resultone").value;
//   var b=document.getElementById("resulttwo").value;
//   if(a===b){
//       alert("this is equal");   
//   }
//   else{
//       alert("this is not");
//   }
//   }

// </script> 




/*  4.  Get two inputs from the user and validate it using a button whether any one of the input contains any null value or not. 
If it contains null then pop-up a message stating that "One of your data is empty, kindly fill it and try againsmile"*/

//   <form>
//      <input type="text" id="first">
//      <input type="text" id="last">
//      <button type="submit" onclick="eveaction()">Click</button>
//   </form>


// <script>

//   function eveaction(){
//      var a=document.getElementById("first").value;
//      var b=document.getElementById("last").value;
//      if(a!=" " && b!=" " && a && b){
//         alert("Thank you for registration");
//      }
//      else{
//         alert("Sorry try again");
//      }
// }

// </script>




/* 5.  Get two inputs from the user and perform all Arithmetic operation. Display each one of the ouput using Inner HTML.*/

//   <input type="text" id="one">
//   <input type="text" id="two">
//   <button onclick="Arithmetic()">sumbit</button>


// <p id="result1"> </p>
// <p id="result2"> </p>
// <p id="result3"> </p>
// <p id="result4"> </p> 
// <p id="result5"> </p>

// <script>
// function Arithmetic(){
// var user1=parseInt( document.getElementById("one").value);
// var user2=parseInt( document.getElementById("two").value);
// document.getElementById("result1").innerHTML = user1 + user2 ;
// document.getElementById("result2").innerHTML = user1 - user2 ;
// document.getElementById("result3").innerHTML = user1 * user2 ;
// document.getElementById("result4").innerHTML = user1 % user2 ;
// document.getElementById("result5").innerHTML = user1 / user2 ;
// }
// </script>



  
/* 6 . Get input from the user where it should accept only the integer. Display the values in a select box using mouse event.*/ 

//  <input type="text" id="text1" >
//  <button onclick="mousevent()">Button</button>
//  <select id="display"></select>

// <script>
//   function mousevent(){
//     var a=document.getElementById("text1").value;
//     alert(a)
//     var out="<option>select</option>"

//     for(var i=0;i<a;i++){
//       out+="<option>"+i+"</option>"
//     }
//     var b=document.getElementById("display").innerHTML=out;  
//   } 
// </script> 




/* 7.Get input from the user where it should accept only the integer. Display the values in a select box using keyboard event.*/
  
//   <input type="text" id="text1" onkeyup="mousevent()" >
//   <button onclick="mousevent()">Button</button>
//   <select id="display"></select>
     
     
//    <script>
//        function mousevent(){
//        var a=document.getElementById("text1").value;
//        var out="<option>select</option>"

//        for(var i=0;i<a;i++){
//           out+="<option>"+i+"</option>"
//        }
//        var b=document.getElementById("display").innerHTML=out; 
//     } 
//    </script>




/* 8. Get an input from the user, display the values in a drop-down.
Select a specific value where it should list-down all the previous values using Inner HTML. */


// <input type="text" id="text1" >
// <button onclick="mousevent()">Button</button>
// <select id="display" onchange="change()"></select>
// <select id="dis"></select>
 
 
// <script>

//     function mousevent(){
//      var a=document.getElementById("text1").value;
//      var out="<option>select</option>"
    
//      alert(a)
//      for(var i=0;i<a;i++){
//         out+="<option>"+i+"</option>"
//      }
//        var g=document.getElementById("display").innerHTML=out; 
//     } 

   
//    function change(){
//      var b=document.getElementById("display").value;
//      var put="<option>select</option>"

//      alert(b);
//      for(var j=0;j<b;j++){
//         put+="<option>"+j+"</option>"
//      }
//       var d=document.getElementById("dis").innerHTML=put;
//     }

// </script>

/* 9. Get an input from the user, display the values in a drop-down. 
Select a specific value and the equvalent form should be created along with two values
 "Username" and "Password" with empty values where user will fill out the data. */

//  <input type = "text" id="text1" >
//  <input type = "button" value="click" onclick="going()" >
//  <select id="selected" onchange="fast()"></select>
//  <p id="result"> </p> 
  
//  <script>
//
//  function going(){
//   var a=document.getElementById("text1").value;
//   var out="<option>select</option>"
//   alert(a)
//   for(var i=0;i<a;i++){
//      out+="<option>"+i+"</option>"
//   }
//    var g=document.getElementById("selected").innerHTML=out; 
//  } 

//  function fast(){
//     var c='FirstName:<input type="text">'
//     var g="passward: <input type='password'>";
//     document.getElementById("result").innerHTML=c+g;
//  }
//
//  </script>


/* 10. Get name, dob from user. Take the first four letter from the name and concat the
birth date then it should be act as an input to the password field.*/

//  Name: <input type="text" id="text1">
//  Dob : <input type="date" id="date">
//  Button: <button onclick="out()">Submit</button>
//   <input type="password" id="pass" >

//   <script>
//     function out(){
//       var a=document.getElementById("text1").value;
//       var b=document.getElementById("date").value;
//       var out =a.slice(0,3);
//       var result=out+" "+b;
//       document.getElementById("pass").value=result;
     
//     }
//   </script>


/* 11. create to javascript function to get date from user and
 used to display date with +5 days and -5days from the getting date and display either in input box  */

//  Date :<input type="date" id="time">
//  <input type="button" value="Adding five" onclick="outputone()">
//  <input type="button" value="Subtraction five" onclick="outputtwo()">
//  <p id="para"></p>
  
//   <script> 

//     function outputone(){
//      let a = new Date(document.getElementById("time").value);
//      a.setDate(a.getDate()+5);
//      var result = document.getElementById("para").innerHTML=a;       
//     }

//     function outputtwo(){
//      let b = new Date(document.getElementById("time").value);
//      b.setDate(b.getDate()-5);
//      var result1 = document.getElementById("para").innerHTML=b;      
//     }

//   </script>
