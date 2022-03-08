debugger
const bu = document.getElementById("btn");
console.log(bu);
bu.addEventListener("click", handleClick);

function handleClick(){
    alert("Clicked");
}