
// var a=Math.random(1000);
// var b=Math.ceil(a);
// console.log(b);



//  var a=Math.cbrt(64);
//  console.log(a);




        // OTP generate
// var a='';
// for(i=0;i<=5;i++){
//     a+=Math.floor(Math.random()*10);   
//  }
//  console.log("OPT :"+" "+a);
   


//  var a="apple";
//  console.log(a.substring(2));


      
// function randomInteger(max,min)
// {
//    var a= Math.ceil(min);
//    var b=Math.floor(max);
//    console.log(Math.floor(Math.random()*(b-a)+a));
// }
// randomInteger(20,1);
// randomInteger(1,10);
// console.log(Math.ceil(Math.random(6)));
// console.log(Math.floor(Math.random()));


//Write a JavaScript function to format a number up to specified decimal places.

// function decimals(n, d){
//     var c=n.toFixed(d);
//     console.log(c);   
// }
// decimals(2.100212,2);
// decimals(2.100212,3);
// decimals(2100,2);
   
//Write a JavaScript function to find the lowest value in an array.

//  function lowestvalue(){
//    var a=[12,34,56,1];
//    console.log(Math.min(...a));
//    var b=[-12,-34,0,-56,-1];
//    console.log(Math.min(...b));

//  }
//  lowestvalue()


function is_Natural(n){
    if( n >=0.0 && Math.floor(n) === n && n !== Infinity) {   //The global property Infinity is a numeric value representing infinity.
       console.log("ture"); 
    }
    else{
        console.log("false");
    }
}
is_Natural(-15);
is_Natural(1);
is_Natural(10.22);
is_Natural(10/0)


// function is_Natural(n){
//     if()
// }


