document.getElementById("header1");
document.getElementById("header1").innerHTML="without";
var header=document.getElementById("header1");
console.log(header);
var htmltag=document.getElementsByTagName("header1");
console.log(htmltag);
var header=document.getElementById("header1").innerHTML;
console.log(header);
document.getElementsByTagName("h3");
document.getElementsByName("h3").innerHTML="Good Morning";
document.getElementsByTagName("h3")[0].innerHTML="good girl"
document.getElementsByTagName("h3")[1].innerHTML="good boy";
document.getElementsByClassName("h2");
document.getElementsByClassName("h2").innerHTML="H2=Good students";
document.getElementsByClassName("classheader1")[0].innerHTML="H2.good girl";
document.getElementsByClassName("classheader1")[1].innerHTML="H2.good boys";
document.querySelector("#header1").innerHTML="Query selector with ID";
document.querySelector(".classheader1")[0].innerHTML="Query selector with class-first";
document.querySelector(".classheader1")[1].innerHTML="Query selector with class-second";
document.querySelector("h3").innerHTML="Queryselcetor of tag";
//query selector 

