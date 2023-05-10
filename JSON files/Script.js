async function addstore(){
    var data =await fetch("https://fakestoreapi.com/products")
    var res = await data.json();
    console.log(res)
    var a=''
    res.map((j)=>{
        // a+='<li>'+j.category+'</li>' 
        a+='<img src="'+ j.image +'">'
    })
    document.getElementById("dat").innerHTML=a;
}


// function  five(){
//     var a =document.getElementById("fn").value;
//     var b=document.getElementById("ln").value;
//     var c=document.getElementById("date").value;
//     var d=document.getElementById("pass").value;
//     alert(a);
//     alert(b);
//     alert(c);
//     alert(d);
//     var read=document.getElementById("demo").innerHTML=
// }
