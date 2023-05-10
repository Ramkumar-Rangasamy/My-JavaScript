//    DOM is an document Object model

//    DOM is an interface that allows developer to manipulate the content,structure and style of website

//    (document) is root element


//    using dom after change the manipulate


    //   enter the document in console changeable  code after the 
    //   console.log(document.head);
    //   console.log(document.body);



//    (getElementById)             this method returns the id of the elements      
    // document.getElementById("idname");



//    (getElementsByClassName)      this method returns all the element of the className       
    //  document.getElementsByClassName("classname");
  

//    (getElementsByTagName)        this method returns all the element or specified TagName       
    //  document.getElementsByTagName("TagName");





//      ( innerHTML )
      //    document.getElementById("byname").innerHTML="wlcome";


//     tag is using only given the ouput
      //    document.getElementById("byname").innerHTML="<b>wlcome</b>";  like a all tag



//      ( textContent )      textcontent change the text and returns           
      //    document.getElementById("byname").textContent="wlcome";

//     tag is allowed   
      //    document.getElementById("byname").textContent=" <b>wlcome</b>";   

       



//     querySelector
            // var a=document.querySelectorA("byname");
    



            // Manipulate the  Dom

//     (CreateElement)  

    //    var a=document.createElement("div")  ;
    //    var d=document.createElement("p");
    //    var b=document.createTextNode("hello") ;
    //    d.append(b)
    
    //    var  c=document.getElementById("name") ;
    //    c.append(a); 

        
    //    var a=document.createElement("div");
    //    var b=document.createElement("p");
    //    var c=document.createTextNode("this name deva");
    //    b.appendChild(c);
    //    a.appendChild(b)
    //    var d=document.getElementById("name");
    //    d.append(a);
       






//    (removeElements)  remove the child element from dom using removechild();

    //   function remove(){
    //        var a=document.getElementById("main");
    //        var b=document.getElementById("demo")
    //        a.remove(b);

    //   }
    //   console.log(b);