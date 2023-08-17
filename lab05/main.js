let mySidenav = document.querySelector("#mySidenav");
let openBtn = document.querySelector("#main > span");

openBtn.addEventListener("click", openNav);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }