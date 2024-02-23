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

var content = document.querySelector('.lines');
var currentIndex = 0;
let flag=0;
function controller(x){
    flag= flag + x;
    slideshow(flag);
    currentIndex++;
    // currentIndex = (currentIndex +2) % 3;
    console.log((currentIndex +2)%2);
    var newPosition = currentIndex * 25; // Assuming each slide is 300px wide
    // content.style.transform = `translateX(-${(flag)*50}%)`;
    if(content.style.transform != "-100%"){
        console.log('a')
        console.log(content.style.transform)
        content.style.transform = "-50%";
        content.style.transform = `translateX(${(flag)*60}%)`;
    }else{
        console.log('b')
    }
}
// liner()

slideshow(flag);
function slideshow(num){
    // let line=document.querySelector(".lines")
    let slides = document.querySelectorAll(".game_container")
    if(num == slides.length){
        flag=0;
        num=0;
   


    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;

    }
    

    for(let y of slides){
        y.style.display="none"
    }
    slides[num].style.display="block";
    // a++;
    // line.style.transform = `translateX(${a*33.3}%)`;

}

document.addEventListener("mousemove", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var cursorIcon = document.querySelector(".cursor-icon");
    
    cursor.style.left = (event.clientX - cursorIcon.offsetWidth / 2) + "px";
    cursor.style.top = (event.clientY - cursorIcon.offsetHeight / 2) + "px";
});
 
let ul=document.querySelectorAll("ul");
let li=document.querySelectorAll("li");
ul.forEach((elm,inx)=>{
  elm.addEventListener('mouseover',()=>{
  elm.style.transform="translateY(-25px)"
})
})
ul.forEach((elm,inx)=>{
  elm.addEventListener('mouseleave',()=>{
  elm.style.transform="translateY(0px)"
})
})

// function controller() {
//     currentIndex = (currentIndex - 1 + 3) % 3;
//     var newPosition = -currentIndex * 100; // Assuming each slide is 300px wide
//     content.style.transform = 'translateX(' + newPosition + 'px)';
// }

// function controller() {
//     currentIndex = (currentIndex + 1) % 3;
//     var newPosition = -currentIndex * 100; // Assuming each slide is 300px wide
//     content.style.transform = 'translateX(' + newPosition + 'px)';
// }