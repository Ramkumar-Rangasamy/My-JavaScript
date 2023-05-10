// let aadharicard=[
//             "ramkumar", this is called superscript    0 this is called subscript
//             "kumar",    this is called superscript    1 this is called subscript
//             "hari",     this is called superscript    2 this is called subscript
//             "kumar",    this is called superscript    3 this is called subscript
//             "subash",   this is called superscript    4 this is called subscript
//             "kavi",     this is called superscript    5 this is called subscript
//             "vjiay",    this is called superscript    6 this is called subscript
//             "hlaven",   this is called superscript    7 this is called subscript
//             "thambi",   this is called superscript    8 this is called subscript
//             "give"      this is called superscript    9 this is called subscript
// ]
// console.log(aadharicard[8]);

// let pesronname=[
//     "ramkumar",
//     "give",
//     "five",
//     "dad",
//     "kumar",
//     "sive",
//     "rasm",
//     "baing",
//     "have",
//     "bad",
//     "open",
//     "ganesh",
//     "vjiay",
//     "devi",
//     "vingesh",
//     "raja"
//  ]

// //  pesronname.length();
// //  document.writeln(pesronname.length());


// //    typeof(pesronname);
//   console.log(typeof(pesronname));





// let a=document.forms["form1"];
// let text="";
// function Submit()
// {
// for(let i=0;i<a.length;i++)
// {
//   text += a.elements[0].value + "<br>";
// }

// document.getElementById("demo").innerHTML = text;
// }


        //   mathmax method 1
// var num=[1,56,87,34,-98,87];
// console.log(Math.max(num));
        //     method 2
// console.log(Math.max(20,39,389,37475,57776));



        //  push()  last add              
// let furits=["apple","orange","grapes"];
// console.log(furits.push("banana"));
// console.log(furits);

        //  pop()  last remove
// let furits=["apple","orange","grapes"];        
// console.log(furits.pop());
// console.log(furits);

        //   unshift() first add value
//    let colors=["blue","yellow","green"] ;
//    console.log(colors.unshift("orange"));  
//    console.log(colors) ; 


        //   shift() first remove
//       let colors=["blue","yellow","green"] ;
//       console.log(colors.shift());
//       console.log(colors);


        //     example

// var C=[""];
// function push(){
        
//  var a=document.getElementById("name").value;
        
//  C.push(a);
//  var para=document.getElementById("one").innerHTML=C;
        
// console.log(a)
// }


// function pop(){
                
//         C.pop()
//         console.log(C)
// }  


      //      splice()  the  delete elements from array   2indexvalue  ,   2 delete
//   var furits=["apple","orange","grapes","greenappple"];  
//   console.log(furits.splice(2,2));
//   console.log(furits);
         
      //      splice() add the element from array     2index  ,  0element  ,  "mango"inseted the element
//  var furits=["apple","orange","grapes","greenappple"];  
//   console.log(furits.splice(2,0,"mango"));
//   console.log(furits); 

        //    concat first Array join with second array  
// var a=[1,2,3,4,5];
// var b=[6,7,8,9,10];
// var c=a.concat(b);
// console.log(c);


        //     slice (between the number) extracted the array element based on index values  forword run
// var a=[1,2,3,4,5,6,7,8,9,10];
//  console.log(a.slice(4,8));

        //     slice  -value  backword  run
// var a=[1,2,3,4,5,6,7,8,9,10];
//   console.log(a.slice(4,-1));

       //      posstive
//       var a=["red","yellow","green","blue","violet"];
//       console.log(a.slice(1)); 
//       console.log(a.slice(1,3)); 

       //      negative
//       var a=["red","yellow","green","blue","violet"];
//       console.log(a.slice(3,-2));




        //  indexof() it's return the index of the first element only
//        var names = "I have red color ball and red color stump and red color bat";
//        console.log(names.indexOf("red"));

        
        //     indexof()
//    var x=["apple","orange","banana","papaya","peacock","birads"] ;
//    console.log(x.indexOf("apple",3)) ;  

// var x=[1,2,5,3,1,3,6,5];
// let c=x.indexOf(1,2)
// console.log(c)


        //   includes()  boolean ture or false
//  var x=["apple","orange","banana","papaya","peacock","birads"] ;
//  console.log(x.includes("apple")); ture
//  console.log(x.includes("ram")); false
//  console.log(x.includes("orange","ram"));



        //  find () It return the first value if the condition is satisfied  
//        var a=[1,2,3,4,5,6,7,8,9,10];
//        var result=a.find(function(element)
//        { 
//         return element>4;
//        })

//        console.log (result) ;  

       

        // filter() getting all elements once satisfied the condition

//          var a=[1,2,3,4,5,6,7,8,9,10];
//          var result=a.filter(function(element)
//          { 
//          return element>4;
//         })

//         console.log (result) ;



        //    findindex() return the index of the element if the condition is satisfied

// var a=[1,2,3,4,5,6,7,8,9,10];
// var result=a.findIndex(function(element)
// {
//         return element>6;
// })
// console.log(result);





//        Es6 updata
//    arrow function

//  var a=(a,b)=>a+b;
//  console.log(a(10,30));




         //sort order array
// var ading=["ram","raj","kumar","surya","bharathi","ajith","bharani","suresh","raja","john","subesh"];
// console.log(ading.sort());


          //reverse order array
// var ading=["ram","raj","kumar","surya","bharathi","ajith","bharani","suresh","raja","john","subesh"];
// console.log(ading.reverse());


                // array       
// var a=["a","c","h","g","j","f","b","e","d","i"]
// console.log(a.reverse());
// console.log(a.sort());
// console.log(a.join("john"));
// console.log(typeof(a));
// console.log(a.slice(5,7));
// console.log(a[8]);