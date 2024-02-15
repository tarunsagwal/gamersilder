let body=document.querySelector("body");
let div=document.createElement("div");
body.appendChild(div)
div.setAttribute("class","loader");
div.setAttribute("onload","loader()");
let type=document.createElement("p");
div.appendChild(type);
type.setAttribute("class","type");
var app = document.querySelector(".type");
let cricle=document.createElement("i");
div.appendChild(cricle)
cricle.setAttribute("class","bx bxl-spring-boot");
cricle.setAttribute("style","color:red;");

window.addEventListener("load", (event) => {
    timer= setInterval(()=>{
        let divi=document.querySelector(".loader")
        divi.classList.remove("loader")
        cricle.classList.remove("bxl-spring-boot")
        type.classList.remove("type");
        type.remove();
        if(timer<1){
            divi.classList.add("loaders")
            cricle.classList.add("bxl-spring-boots")
            type.classList.add("types")
        }
    },4000)
    console.log(timer);

  });
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
//   .pauseFor(250)
  .typeString('welcome back')
  .pauseFor(100)
  .deleteChars(4)
  .typeString('<strong><span style="color:red">suko game</span></strong>')
  .pauseFor(2500)
//   .deleteChars(4)
//   .typeString('give you anthor world')
//   .pauseFor(200)
//   .deleteChars(26)
//   .typeString('more fun')
  .pauseFor(10000)
  .start();
console.log(div)
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
let icon=document.querySelector(".icon");
let sun=document.querySelector("#sun");
let moon=document.querySelector("#moon");
let dark = document.getElementsByTagName('link')[1];
let change=()=>{
    sun.style.transform="scale(.0)"
    moon.style.transform="scale(1)"
    dark.href = "dark.css";
}
one=()=>{
    sun.style.transform="scale(1)"
    moon.style.transform="scale(0)"
    dark.href = "font.css";

}
let profiles=document.querySelector("#profile");
let profilebox=document.querySelector(".profile_box");
let profile=()=>{
    profilebox.classList.toggle("profile_boxs")
}
let submit=()=>{
    const name= document.querySelector('.enter_name');
    let mail = document.querySelector('.enter_email');
    let val = name.value;
    let email = mail.value;
    if(val!="" ){
        if(email!="" && val!="" ){
            alert(val+"Successfully email your responses thank you");
        }else{
            alert('Plz enter email a form ');
        }
    }else{
    alert('Plz enter name a form ');

    }
}
// profilebox.style.transform="translateX(0px)"

// let moon=document.createElement("i");
// icon.appendChild(moon);
// moon.setAttribute("class","bx bxs-moon");
// moon.setAttribute("style","color:#eae6e6");