try{
    alert("hello from try block.");
    alert(y);
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    document.write(error.name+ " ");
    document.write(error.message);
}finally{
    alert()
}
//throw statement
function myfunction()
const message=document.getElementById("paraID");
message.innerHTML="";
let x=document.getElementById("demo").ariaValueMax;
try{
    if(x=="") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    X=Number(x);
    if(x>10)throw "is too big";
    if(x<5) throw "is too low";
}catch(e){
    message.innerHTMK="input" +e;
}
