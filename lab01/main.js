let items = []

function getInput() {
    console.log("getInput run..")
    do {
        let input = prompt(" Input item ");
        if (input === null || input.trim() === '') {
            break
        }

        items.push(input)
    } while (true)
    console.log("exit input loop")
}
function render() {
    const ul = document.querySelector("#mylist")
    items.forEach(el => {
        let li = document.createElement("li")
        li.innerText = el 
        ul.appendChild(li)          
    })
}
getInput()
render()


