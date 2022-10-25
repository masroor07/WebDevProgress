const ob1 = {myName : "Masroor",
    roll : 107,
    subs : ["Math","Science"],
    relationship : {father: "Hussain",
        mother : "Zubaida"},
    age : function(value) {
        let age = `My age is ${value}`
        return age;
    }}

console.log(ob1.age(2))

const daughter = Object.create(ob1)
daughter.myName = "Zeenat-Ul-Arsh"
console.log(daughter.myName) 
console.log(daughter.age(20)) 