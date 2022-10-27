const element = document.getElementById("bulb")
const buttonOn = document.querySelector("#on")
const buttonOff = document.querySelector("#off")

const turnOn = () =>{
element.src = "Images/on.jpg"
buttonOn.style.backgroundColor = "Green"
buttonOff.style.backgroundColor = "grey"
}

const turnOff = () =>{
element.src = "Images/off.jpg"
buttonOn.style.backgroundColor = "grey"    
buttonOff.style.backgroundColor = "red"    
}




buttonOn.addEventListener("click", turnOn)
buttonOff.addEventListener("click", turnOff)
