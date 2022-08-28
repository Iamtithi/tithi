console.clear();
console.log(window);
/*
const input =document.querySelector("input");
input.addEventListener("change", changeHanler);
function changeHanler(e)
{
document.write("changed");
console.log("changed");
console.log(e);
console.log(e.type);
console.log(e.target);
console.log(e.targrt.className);
console.log(e.target.id);
console.log(e.target.value);
}
*/
// const programs=document.querySelectorAll("input[name=program");
// console.log(programs);
// Array .from(programs).map((program)=>{
// program.addEventListener("change", programHandler);

// });
// function programHandler(e){
//     console.log("checked");
//     if(e.target.checked){
//         console.log(e.target.value);
//         console.log(e.target.required);
//     }
// }
const division=document.querySelector("#division");
console.log(divison);
division.addEventlistener("change",divisionHandler);
    function divisionHandler(e){
        console.log("selected");
        console.log(e);
        console.log(e.target.value);
        console.log(e.type);
    }

