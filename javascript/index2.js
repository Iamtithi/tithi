var paraVar =document.querySelector("#paraid");
function addStyle(){
    paraVar.style.color="red";
    paraVar.style.fontsize="10re";
    paraVar.style.fontweight="bold";
    paraVar.style.fontstyle="italic";
}
function removeStyle()
{
    paraVar.style=" ";
}
function nextPage()
{
    location.href="next.html";
}