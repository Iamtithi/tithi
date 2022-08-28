document.querySelector("button").addEventListener("click",listenerfunction);
function listenerfunction()
{
    alert("Hello");
}
document.querySelector("button").addEventListener("mousedown")
document.write("Hello"); 
document.querySelector("button").addEventListener("mouseover",function()
{
    alert("Hello")
})
document.querySelectorAll(".myButton")[0].addEventListener("click",function(){

var text=this.innerHTML;
document.querySelector("h1").innerHTML
=text+"is clicked";
});
var len=document.querySelectorAll(".mybutton")
const names=["karim","Rahim","John"];
document.write("For of use");
for(let name of name)
{
    document.write(name +"\t");
}
document.write("<br/> For in loop use:<br/>");
//for in loop
let person={
    id: 1;
    name :'Amina Tithi',
    profession:'Student'
}
for(let x in person){
    document.write(x+" : "+person[x]+"<br/>");
}
document.write("<br/> for each loop use :<br/>");
var numbers=[1,21,31,41];
numbers.forEach(myfunction);
function myfunction(x){
    document.write(x+"<br/>");
}
document.write("<br/> Map use: <br/>");
var squareNumbers=numbers.map(function(x){
    return x*x;
})
document.write(squareNumbers + "<br/>");
//filter
document.write("<br/>Filter use:<br/>");
var numbers_filter=[1,21,31,41,67,90];
var filterdNumbers=numbers_filter.filter(function(x){
return x>20})
const display=()=>{
    document.write("<br/hello from arrow function.");
    display();
}
function abc(){
    return "Hello without keyword";
}
const showStudent
