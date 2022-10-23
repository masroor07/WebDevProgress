//alert()
alert("Before Continuing to the site:")

//confirm( ok == true and cancel == false)
let confirmBoolean = confirm("Continue to site?")
console.log(confirmBoolean)

//prompt()
let nameU = prompt("Please neter your name: ")
alert(nameU && nameU!=null?`${nameU}, Wecome to KOG's official page`: "Please reload and Enter your name to continue!")
