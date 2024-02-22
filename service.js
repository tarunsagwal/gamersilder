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