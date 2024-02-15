let icon=document.querySelector(".icon");
let sun=document.querySelector("#sun");
let moon=document.querySelector("#moon");
let dark = document.getElementsByTagName('link')[1];

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

var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".game_detale");
  if (n === undefined) {n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1000); // Change image every 10 seconds
}
showSlides()