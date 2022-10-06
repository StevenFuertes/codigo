const button_start = document.getElementById("button_start");

button_start.addEventListener("click", function(){
    document.getElementById("game").style.display ="block";
}
)

const button_end = document.getElementById("button_start")

button_end.addEventListener("click", function () {
    document.getElementById("game").style.color ="red";
}
)

const button_big = document.getElementById("button_start")

button_start.addEventListener("click", function(){
    document.getElementById("game").style.fontSize = "50px"
})


const background = document.getElementById("button_start")

background.addEventListener("click", function(){
    document.getElementById("game").style.background = "blue"
})


const rendondo = document.getElementById("button_start")

rendondo.addEventListener("click", function(){
    document.getElementById("game").style.borderRadius = "10px";
})