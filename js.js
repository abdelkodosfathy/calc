let button = document.querySelectorAll(".buttons div");
let inputFeild = document.querySelector(".screen p");
let themesBtn = document.querySelector(".toggle-btn");

let i = 1;
themesBtn.onclick = () => {
    if(i === 3){
        i = 0;
    }
    switch (i){
        case 0:
            themesBtn.style.justifyContent = "flex-start";
            document.body.classList = "";
            break;
        case 1:
            themesBtn.style.justifyContent = "center";
            document.body.classList = "theme-two";
            break;
        case 2:
            themesBtn.style.justifyContent = "flex-end";
            document.body.classList = "theme-three";
            break;
    }
    i++;
}

for(let i = 0; i < button.length; i++){
    button[i].onclick = () => btns(i);
}
function btns(i) {
    let btnVal = button[i].innerHTML;
    let result;
    if (btnVal === "="){
        result = eval(inputFeild.innerHTML);
        inputFeild.innerHTML = result;
    }
    else if(btnVal === "RESET"){
        inputFeild.innerHTML = "";
    }
    else if(btnVal === "DEL"){
        inputFeild.innerHTML = inputFeild.innerHTML.substring(0,inputFeild.innerHTML.length - 1);
    }
    else{
        inputFeild.innerHTML += btnVal;
    }
}

document.addEventListener("mousedown", (e) => {
    clicked(e);
});
document.addEventListener("mouseup", (e) => {
    clicked(e);
});
function clicked (e) {
    if(e.target.classList.contains("clickable")){
        e.target.classList.toggle("clicked");
    }
}