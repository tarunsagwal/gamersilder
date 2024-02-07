let body=document.querySelector("body");
let div=document.createElement("div");
body.appendChild(div)
div.setAttribute("class","loader");
div.setAttribute("onload","loader()");
let cricle=document.createElement("div");
div.appendChild(cricle)
cricle.setAttribute("class","cricle");
cricle.setAttribute("class","cricle");
console.log(div)
loader=()=>{
   let timer= setInterval(()=>{
    let divi=document.querySelector(".loader")
    divi.Style.display="flex"
   },5000)
};
console.log(loader())
   loader=()=>{ 
       clearInterval(timer)}
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

