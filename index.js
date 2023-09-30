// Iteration 1: Names and Input
let hacker1 = "Marcel"
    console.log (`The driver's name is ${hacker1}`);
let hacker2 = "Gabri"
    console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)}
    
// Iteration 3: Loops

for (let i=0; i<hacker1.length; i++) {
    if (i<hacker1.length){
        console.log(hacker1[i].toUpperCase())
    }
}
let reverseName = ""

for (let j=hacker1.length -1; j>=0; j--) {
    reverseName += hacker1[j]
}
console.log(reverseName)

console.log(hacker1.localeCompare(hacker2))
if (hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigator goes first, definitely.")
}else if (hacker1.localeCompare(hacker2)===-1){
    console.log("The driver's name goes first.")
}else{console.log("What?! You both have the same name?")}






