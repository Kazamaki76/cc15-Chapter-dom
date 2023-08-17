let h1 = document.querySelector("h1")

h1.classList.add("text-red")

// setTimeout(()=>{
//     h1.classList.remove("text-red")
// },3000)

// setTimeout(() => {
//     h1.classList.add("text-blue")
// },1000)

h1.onclick = () => {
    h1.classList.toggle("text-red")
}

h1.onmouseenter = () => {
    if(h1.classList.contains("text-red")){
        h1.classList.remove("text-red")
    }
    h1.classList.add("text-blue")
}

h1.onmouseleave = () => {
    h1.classList.remove("text-red")
    h1.classList.remove("text-blue")
}
