let icon=document.querySelector(".icon");
let sun=document.querySelector("#sun");
let moon=document.querySelector("#moon");
let change=()=>{
    sun.style.transform="scale(.0)"
    moon.style.transform="scale(1)"
}
one=()=>{
    sun.style.transform="scale(1)"
    moon.style.transform="scale(0)"
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