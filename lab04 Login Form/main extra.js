
const users = [
    { name: "Andy", password: "1234" },
    { name: "Bobby", password: "1234" },
    { name: "Candy", password: "1234" },
    { name: "Danny", password: "1234" },
]





const checkUser = (username, password) => {
    let resultUser = users.find( el => el.name === inp1.value)
    if (!resultUser) {// แปลว่าไม่เจอ  user
      
        return false 
    } 
    if(resultUser.password !== inp2.value) {
        
        return false
    }
    return resultUser
}

const hdlsubmit = (e) => {
    e.preventDefault()
    counter += 1 
}


foundUser = checkUser(inp1.value, inp2.value) 
if(foundUser) { 
    output.style.color = "green"
    output.style.opacity = "1"
    output.innerText = "login Successful" 
} else { 
    output.style.color = "Red"
    output.style.opacity = "1"
    output.innerText = "invalid login"
    if(counter >= 4) {
        inp1.setAttribute("disabled", "")
        inp2.setAttribute("disabled", "")
        inp2.nextElementSibling.setAttribute("disabled", "")
        output.innerText = "locked !!" 
    }

}

loginForm.addEventListener("submit", hdlsubmit)