let button = document.querySelectorAll(".buttons div");
let inputFeild = document.querySelector(".screen p");


console.log(button);

for(let i = 0; i < button.length; i++){
    button[i].onclick = () => that(i);
}
function that(i) {
    let val = button[i].innerHTML;
    let result;
    if (val === "="){
        result = eval(inputFeild.innerHTML);
        inputFeild.innerHTML = result;
    }
    else if(val === "RESET"){
        inputFeild.innerHTML = "";
    }
    else{
        inputFeild.innerHTML += button[i].innerHTML;
    }
}