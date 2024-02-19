let icon=document.querySelector(".icon");
let sun=document.querySelector("#sun");
let moon=document.querySelector("#moon");
let dark = document.getElementsByTagName('link')[1];

let change=()=>{
    sun.style.transform="scale(0)"
    dark.href = "contact.css";
    moon.style.transform="scale(1)"
}
one=()=>{
    sun.style.transform="scale(1)"
    dark.href = "contact_dark.css";
    moon.style.transform="scale(0)"
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
// document.addEventListener("DOMContentLoaded", function(e) {
//     var cursorIcon = document.getElementById('cursor-icon');
//     const bbd = document.querySelector('main');
//     // let bbdw = bbd.clientWidth;
//     // let bbdh = bbd.clientHeight;
// document.addEventListener("mousemove", function(e) {
//     var px = e.pageX;
//     var py = e.pageY;
//     //   console.log(x)
//       cursorIcon.style.left = (px - 10) + "px";
//       cursorIcon.style.top = (py - 10) + "px";
//     });
    
//     document.addEventListener("mouseenter", function() {
//       cursorIcon.style.display = 'block';
//     });
    
//     document.addEventListener("mouseleave", function() {
//       cursorIcon.style.display = 'none';
//     });
//   });
document.addEventListener("mousemove", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var cursorIcon = document.querySelector(".cursor-icon");
    
    cursor.style.left = (event.clientX - cursorIcon.offsetWidth / 2) + "px";
    cursor.style.top = (event.clientY - cursorIcon.offsetHeight / 2) + "px";
});