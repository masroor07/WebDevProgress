const view = document.querySelector("#view2")
const createDivs = (parent,item) => {
    const newDiv = document.createElement("div")
    newDiv.textContent = item;
    newDiv.style.backgroundColor = 'black'
    newDiv.style.height = '100px'
    newDiv.style.width = "100px"
    newDiv.style.margin = "10px"
    newDiv.style.display = "flex"
    newDiv.style.justifyContent = 'center'
    newDiv.style.alignItems = 'center'
    parent.append(newDiv);
};
for (let index = 0; index < 18; index++) {
    createDivs(view, index)
    
}