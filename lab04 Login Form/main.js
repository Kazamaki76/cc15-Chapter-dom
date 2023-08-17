
// let inp1 = document.querySelector("#Username")
// let inp2 = document.querySelector("#Password")
// let loginForm = document.querySelector("#Loginform")
// let output = document.querySelector(".output")

// const hdlsubmit = (e) => {
//     e.preventdeFault()
//     output.textContent = inp1.value + " : " + inp2.value
// }
// loginForm.addEventListener("submit", hdlsubmit)
// // inp1.addEventListener("click", hdlInp1Click )




/* DOM : HW01 
ตรวจสอบ username + pass จาก input และข้อมูล user 
ถ้่่าlogin ผ่าน ให้ขึ้น login success สีเขียว 
ุ่าไำม่ผ่าน ให้ขึ้นinvalid และสีแดงที่ output 

Challenge 1 logingได้ 3 ครั้ง ถ้าไม่ผ่านให้ disable ตัส inout ทั้งหมด
2 แสดงผล 3 วิแล้วหายไป  */ 

const user = [
    {name: "Andy" , password : "1234"},
    {name: "Bobby" , password : "1234"},
    {name: "Candy" , password : "1234"},
    {name: "Danny" , password : "1234"},
]

// ตัวแปร username pass มาจาก input
// ตัวแปร foundUser ไว่เก็บ userName
// ตัวแปร output
// ตัวแปร loginForm ใช้เพื่อรับ event : submit 



//flow 
// 1. Check username with users(DB) => loop user[i].name มา check ทั้งหมด 
/* userinput === user[i].name : ผ่านขั้น  1
และเก็บ user obj ที่เจอ ไว้ที่ foundUser 
 ถ้าไม่ตรงเลยให้ invalid login 

 2. Check password ว่าตรงกับ password ของ user นั้นไหม 
 foundUser.password === password : login ผ่าน 
 ไม่ตรง ให้ invalid login แลัวออก 
 ถ้า passตรงคือlogin ผ่าน 

*/


let inp1 = document.querySelector("#username") 
let inp2 = document.querySelector("#password") 
let output = document.querySelector(".output")
let foundUser = null
let loginForm = document.querySelector(#"loginForm")




// inp1.value คือ username
// inp2.value คือ password
