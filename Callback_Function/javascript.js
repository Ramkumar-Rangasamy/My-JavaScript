

function mainfun(a,b,callbackfun){
     console.log(a+b);
      callbackfun()
}


function sayfun(a,b,callback){
    console.log(a-b);
    callback()
}

function divison(a,b){
    console.log(a/b);
}

mainfun(100,200,sayfun,divison)  