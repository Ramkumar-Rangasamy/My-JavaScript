// std=["Ramkumar",22,"Coimbatore",9944897180];
// var[name,age,City,mobile]=std;
// // console.log(name,age);
// var [name,City]=[City,name];
//   console.log(name,City);


//   ...rest
// var per=[101,'ramkumar',21,"21 gandhi nagar",896785,"TN","9944897180"];
// var [id,name,age,address,pincode,state,number]=per;


// var [ ,name,age,number,...rest]=per;
// console.log(rest);
 

    // nested array

//  var std=["Ramkumar",24,["cbe",994489710]];
//  var[ ,age,[ ,number]]=std;
//  console.log(`${age} ${number}`);


//    clone array using spread operator
    var arr1=[1,2,3,4,"ram"];
    var arr=[...arr1];
    console.log(arr);
    arr1.push("kumar");
    console.log(arr);
    console.log(arr1);