const a = 2
let b = 2
if (a > b) {
    console.log("Greater")
}else if(a <  b){
    console.log("Smaller")
}else

console.log("Equal")

switch (0) {
    case 100:
        console.log("Pass")
        break;
        
    case 70:
        console.log("fail")
        break;
    
    default:
        console.log("didnt appeear")
        break;
}


//ternary ops

// syntax
//condition ? iftrue : iffalse
let studentStatus = true

let stat = studentStatus ? "Student passed" : "Student failed"

console.log(stat)