function btnClick() {
    alert(555)
}

function showinfo() {
    let btn = document.querySelector("button")
h1.innerText = "Info"
}
let btn = document.querySelector("button")
// btn.onclick = btnClick
let h2 = document.querySelector("h2")

btn.addEventListener("click", btnClick) 
btn.addEventListener("click", showinfo) 

h2.addEventListener("click", () => {
    btn.removeEventListener("click", btnClick )
})