//                 JavaScript Encapsulation Example
// Let's see a simple example of encapsulation that contains two data members with its setter and getter methods.
  
// class Student  
//   {  
//     constructor()  
//     {  
//        var name;  
//        var marks;  
//     }  
//         getName()  
//         {  
//           return this.name;  
//         }  
//       setName(name)  
//       {  
//         this.name=name;  
//       }  
        
//       getMarks()  
//       {  
//         return this.marks;  
//       }  
//     setMarks(marks)  
//     {  
//       this.marks=marks;  
//     }  
  
//     }  
//     var stud=new Student();  
//      stud.setName("John");  
//      stud.setMarks(80);  
//      document.writeln(stud.getName()+" "+stud.getMarks());  



//      JavaScript Encapsulation Example: Validate
// In this example, we validate the marks of the student. 


// class Student  
//   {  
//     constructor()  
//     {  
//        var name;  
//        var marks;  
//     }  
//         getName()  
//         {  
//           return this.name;  
//         }  
//       setName(name)  
//       {  
//         this.name=name;  
//       }  
        
//       getMarks()  
//       {  
//         return this.marks;  
//       }  
//     setMarks(marks)  
//     {  
//         if(marks<0||marks>100)  
//         {  
//           alert("Invalid Marks");  
//         }  
//       else  
//         {  
//           this.marks=marks;  
//         }  
//     }  
//     }  
//     var stud=new Student();  
//      stud.setName("John");  
//      stud.setMarks(110);//alert() invokes  
//      document.writeln(stud.getName()+" "+stud.getMarks());  


// In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,

// const student = {
//     firstName: 'Monica'
// }

// // getting property
// Object.defineProperty(student, "getName", {
//     get : function () {
//         return this.firstName;
//     }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//     set : function (value) {
//         this.firstName = value;
//     }
// });

// console.log(student.firstName); // Monica

// // changing the property value
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah







// In the above example, Object.defineProperty() is used to access and change the property of an object.

// The syntax for using Object.defineProperty() is:

// Object.defineProperty(obj, prop, descriptor)
// The Object.defineProperty() method takes three arguments.

// The first argument is the objectName.
// The second argument is the name of the property.
// The third argument is an object that describes the property.