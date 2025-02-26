
console.log("server online")
const button = document.getElementById("myButton")
button.addEventListener("click", function getScore(){
let scoreAmount = document.getElementById("scoreAmount")
let currnentScore = parseInt(scoreAmount.innerText)
currnentScore +=1
scoreAmount.innerText = currnentScore
let name = document.getElementById("inputName").value
let savedname = localStorage.getItem("name")
localStorage.setItem("score amount", currnentScore)
if (scoreAmount.innerText == 50) {
    alert("You win!!!!")
    alert("Thanks " + savedname + " for playing")

}

let savedscore = localStorage.getItem("score amount")

})

const saveButton = document.getElementById("saveButton")
saveButton.addEventListener("click", function(){
let name = document.getElementById("inputName").value

localStorage.setItem("name", name)
let savedname = localStorage.getItem("name")
console.log(savedname)

let userName = document.getElementById("userName")
userName.innerHTML = "Name saved: " + name
if (name == "") {
    userName.innerHTML = "Name isnt valid"
}
})

const loadButton = document.getElementById("loadButton")
loadButton.addEventListener("click", function(){
scoreAmount.innerText = localStorage.getItem("score amount")
userName.innerHTML = localStorage.getItem("name")
})

