const [icon,sun,moon,dark] = [document.querySelector(".icon"),document.querySelector("#sun"),document.querySelector("#moon"),document.getElementsByTagName('link')[1]]

let change=()=>{
    sun.style.transform="scale(1)"
    dark.href = "service_dark.css";
    moon.style.transform="scale(0)"
}
one=()=>{
    sun.style.transform="scale(0)"
    dark.href = "service.css";
    moon.style.transform="scale(1)"
}

function transfrom(){
    let home=document.querySelector(".home");
    home.classList.add("tapchange");
}
function transfroms(){
    let about=document.querySelector(".about");
    about.classList.add("tapchange");
}
function trans(){
    let about=document.querySelector(".services");
    about.classList.add("tapchange");
}function transfromse(){
    let about=document.querySelector(".contact");
    about.classList.add("tapchange");
}
function nontrans(){
    let home=document.querySelector(".home");
    let about=document.querySelector(".about");
    let services=document.querySelector(".services");
    let contact=document.querySelector(".contact");
    about.classList.remove("tapchange")
    services.classList.remove("tapchange")
    contact.classList.remove("tapchange")
    home.classList.remove("tapchange")
}
    document.addEventListener("mousemove", function(event) {
        var cursor = document.querySelector(".custom-cursor");
        var cursorIcon = document.querySelector(".cursor-icon");
        
        cursor.style.left = (event.clientX - cursorIcon.offsetWidth / 2) + "px";
        cursor.style.top = (event.clientY - cursorIcon.offsetHeight / 2) + "px";
    });