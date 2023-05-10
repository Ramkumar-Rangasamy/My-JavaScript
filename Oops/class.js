//    class 


// class class1{
//     name;
//     age;

// constructor()
// {
//     this.name="Ramkumar";
//     this.age=20;
// }

//  display()
// {    
//  console.log("name = " + this.name);   
//  console.log("age = " + this.age);
// }

// }
// var object=new class1();
//     object.display();






//    single inheritance

// class class1{    
//     name;
//     age;

// constructor()
// {
//     this.name="Ramkumar";
//     this.age=20;
// }

//  display()
// {    
//  console.log("name = " + this.name);   
//  console.log("age = " + this.age);
// }

// }

// class class2 extends class1{
//     mark;
//     constructor()
//     {
//         super();
//         this.mark=60;
//     }
//     last(){
//        console.log("marak="+ this.mark) ;
//     }
// }

// var object= new class2();
//     object.display();
//     object.last();

     





//         multiple inheritance


















//                              encapsulation
//                js encapsulation is a process of binding the data
//             encapsulation  two methods   Get method and set method

        

    //   class details
    //   {
    //     get(){
    //       return this.name;
    //     }
    //     set(nam){
    //         this.name=nam;
    //     }
    //     display(){
    //         console.log("This is my Name"+"  "+this.name);
    //     } 

    //   }
    //   var object=new details();
    //       object.get();
    //       object.set('Ram Kumar');
    //       object.display();





//                  polymorphiesm 
// 1)  polymorphiesm proforms single action in different form    
// 2)  it's provide an ability to call the same method on the different objects
//                 method over riding
     
         
// class A
//     {
//     num1;
//     num2;
//     constructor()
//     {
//         this.num1=6;
//         this.num2=3;
//     }
//     display()
//     {
//     console.log(this.num1/this.num2)
//     }
//   }
// class B extends A
//   {
//     display()
//     {
//       super.display();
//       console.log(this.num1*this.num2);
//     }
//   }
// var obj =new B();
//     obj.display();



// class Person{
//     name;
//     age;
//     energy;
//     constructor( )
//     {
//         this.name = "tom";
//         this.age = 20;
//         this.energy = 100;
//     }
//     doSomethingFun()
//     {
//         console.log(`name=${this.name},age=${this.age + 10},energy=${this.energy - 10}`);
//     }
// }
// var object = new Person();
//     object = doSomethingFun() ;





    // class create
//     Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

// The Person class should have a method called describe which returns a string with the following 
// syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

// class Person{
//     name;
//     age;
//     constructor()
//     {
//       this.name="John";
//       this.age=19;
//     }
//     dispaly(){
//       console.log(`name is ${this.name} \n Age is ${this.age}`);
//     }
// }
// var total=new Person();
//     total.dispaly();




// In this task we provide you with the start of a definition for a Shape class. It has three properties: name, sides, and sideLength. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

// We'd like you to:

// Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
// Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
// Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
// Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
// Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
// Call triangle.calcPerimeter() to check that it works OK.


// class Shape{
//     constructor(name,sides,sideLength){
//         this.name=name;
//         this.sides=sides;
//         this.sideLength=sideLength;
//      }
//      calcPerimeter(){
//          console.log(this.sides*this.sideLength);
//      }
//  }
//  var square=new Shape('Square',4,5);
//      square.calcPerimeter();
//  var triangle=new Shape('triangle',3,3);
//      triangle.calcPerimeter();



    // class inheritance

// class Person{
//     name;
//     age;
//    constructor()
//    {
//       this.name='Ramkumar';
//       this.age=22;   
//    }
// }
// class Teacher extends Person{
//    constructor(){
//        super();    
//    }
//    display(){
//        console.log("Name of person"+" "+this.name+"\n"+" Age is"+" "+this.age);
//    }

// }
// var total=new Teacher();
//    total.display();



// class Animal {
//     constructor(lg) {
//         this.legs = lg;
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
// }
// var result = new Dog();
// console.log(result.legs);