const firstName = "Daniil"
const age = 21

function getAge() {
	return age
}


console.log(`Hello my name is ${name} i am ${getAge() > 20 ? "Need to go work" : "Dont need to go work"} age old`)


//Методы строк
console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2)) //находит символ по индексу 
console.log(firstName.indexOf('i')) // находил индекс по символу
console.log(firstName.startsWith('Dan')) 
console.log(firstName.endsWith('il')) 
console.log(firstName.repeat(2)) 

console.log(firstName.slice(1, 3))
console.log(firstName.split())

const password = '     my super pass   '
console.log(password.trim())