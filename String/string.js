// var string="the number o\bf value\n    the ten";
// console.log(string);

        //    meaningfull
// var string1="\\n is used for new line";
// console.log(string1);

        // null character
// var string="\0";
// console.log(string);

        //   length is  properties how many letters in store in varaiablesnames 36
//   var str="string is a collection of character ";
//    console.log(str.length);


                     
//        indexOf this method
//      var firstname="the quick brown for jumps over the lazy dog. if the dog barked dog";
//     //    console.log(firstname.length);
//       var names="dog";
//       let r=(firstname.indexOf(names));
//       console.log(r);
//       let y=(firstname.indexOf(names,r+1));
//       console.log(y);
//       console.log(firstname.indexOf(names,y+1));


//             indexOf this method
//       var firstname="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
//       var names="quick";
//       var a=firstname.indexOf(names);
//       console.log(a);
//       var b=firstname.indexOf(names,a+1);
//       console.log(b);
//       var c=firstname.indexOf(names,b+1);
//       console.log(c);




                        //   .slice Method
      
             //   .slice()firs 30letter a print in lazy quick dog. if the dog quick barked dog quick
//      var anmes="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
//      console.log(anmes.slice(30));

             //   .slice() start values only ick brown for
//     var bnames="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
//     console.log(bnames.slice(6,20));

            //    .slice()dog quick revers-10
//        var cnames="the quick brown for jumps over the lazy quick dog. if the dog quick barked\bdog quick the the the";
//        console.log(cnames.slice(-10));

            //   .slice()dog quick revers-30,-20 the dog quick barked
//       var dnames="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
//       console.log(dnames.slice(30,-10)); 




           //       concat(); method two string have in  concat
    //it can be contcat the second string from the first string   
        //  let name1="ramkumar";
        //  let name2="rangaraj";
        //  console.log(name1.concat(" ",name2));
           



          //        replace and replaceall
//      let a="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
//      console.log(a.replace('dog','monkey'));

          //        replaceall
//      let a="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
//      console.log(a.replaceAll('dog','monkey'));




                //     uppercase and lowercase
    // let a="the quick brown for jumps over the lazy quick dog. if the dog quick barked dog quick";
    // console.log(a.toUpperCase()) ;  
    
                //       lowercase
    //        let a="THE QUICK BROWN FOR JUMPS OVER THE LAZY QUICK DOG. IF THE DOG QUICK BARKED DOG QUICK"; 
    //        console.log(a.toLowerCase()) ;   


    
                //     charAt() one letter based on given index value start the 0 to number 
        //   let a= "ramkumar";
        //   console.log(a.charAt(5));




     //       charcodeAT binarycode 
        //  let a="ramkumar";
        //  console.log(a.charCodeAt(2));




              // split method

        //  let a="etter based on given index value start the 0 to number";
        //  console.log(a.split());

             // index 4 print in r only 
        //     let a="etter based on given index value start the 0 to number";
        //     let words=a.split('');
        //     console.log(words[4]);



            //  words   space " "
        //     let a="etter based on given index value start the 0 to number";
        //    let words=a.split(" ");
        //    console.log(words[5]);




     //       toString " "
//       let a="etter based on given index value start the 0 to number";
//       let b="number";
//       console.log(b.toString());


   
       // how do you  count the number of vowels and consonants in  the given string

//        const str="abcdefghijklmnopqrstuvwxyz";

//        const vowels=str.match(/[aeiou]/gi);
//        const consonants=str.match(/[^aeiou]/gi);
//        console.log(vowels.length);

//        console.log(consonants);
        



        //       includes(); methods it returns (boolean values) while checking this  
        //       string if srching string is passtent in given string that returns ture othervise flase
// let names="geetha";
// console.log(names.includes("g"));

                 
        //   trim avoids the unneccessaryn sapce ****remove space with tirm() string start and end 

// var names="         Lorem ipsum do Explicabo consectetur ducimus,cupiditate assumenda odit mollitia labore. Sunt.     ";
//  console.log(names.trim());



        //   substring()  geting the substring of the string based on the index value  s
//       var a ="hello ram";
//       console.log(a.substring(3));
