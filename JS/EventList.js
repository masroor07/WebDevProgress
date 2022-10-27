const element = document.querySelector("h2")
const button = document.querySelector("#increment")
const buttoD = document.querySelector("#decrement")
let value = element.textContent
const increment = () => {
    
    value = Number(value) + 1  
    element.textContent = value
}
const decrement = () => {
    if(value !=0)
        value = Number(value) + -1  
        element.textContent = value     
    
    }


    button.addEventListener("click", increment)
    buttoD.addEventListener("click", decrement)


