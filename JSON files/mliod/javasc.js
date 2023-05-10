async function addstore(){
    var list =await fetch("https://fakestoreapi.com/products")
    var listone = await list.json();
    console.log(listone)
    var imag={"imagepath":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
    var image= document.getElementById("img1");
    image.src=imag.imagepath;
    var imag={"imagepath":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}
    var image= document.getElementById("img2");
    image.src=imag.imagepath;
    var imag={"imagepath":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}
    var image= document.getElementById("img3");
    image.src=imag.imagepath;
}